package com.uniovi.quizapp.logic.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Random;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniovi.quizapp.dataacess.dao.api.ICustomQuestionDao;
import com.uniovi.quizapp.dataacess.dao.api.IRankDao;
import com.uniovi.quizapp.dataacess.dao.api.IUserDao;
import com.uniovi.quizapp.dataacess.model.question.CustomQuestion;
import com.uniovi.quizapp.dataacess.model.question.Question;
import com.uniovi.quizapp.dataacess.model.question.QuestionCodeBlock;
import com.uniovi.quizapp.dataacess.model.question.QuestionCompleteCode;
import com.uniovi.quizapp.dataacess.model.question.QuestionOptions;
import com.uniovi.quizapp.dataacess.model.question.atributes.Option;
import com.uniovi.quizapp.dataacess.model.question.atributes.StateQuestion;
import com.uniovi.quizapp.dataacess.model.user.Rank;
import com.uniovi.quizapp.dataacess.model.user.User;
import com.uniovi.quizapp.logic.api.ICustomQuestionManagement;
import com.uniovi.quizapp.logic.general.AbstractManagement;
import com.uniovi.quizapp.logic.general.CheckUserInfo;
import com.uniovi.quizapp.logic.impl.dto.UserInfoDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.CustomQuestionDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.ResponseQuestionDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.VoteQuestionDto;

@Service
public class CustomQuestionManagementImpl extends AbstractManagement implements ICustomQuestionManagement {
	private static int[] numberForVote = {0, 1, 2};
	private static int minNumVotes = 10;
	
	private static double percentajeAccept = 0.8;
	private static double percentajeDismiss = 0.4;
	
	@Autowired
	private ICustomQuestionDao questionDao;
	@Autowired
	private IUserDao userDao;
	@Autowired
	private IRankDao levelRankDao;
	
	
	@Override
	public CustomQuestion newCustomQuestion(CustomQuestionDto dto) throws Exception {
		checkQuestion(dto);
		CustomQuestion entity = mapper.convertValue(dto, CustomQuestion.class);
		entity.setState(StateQuestion.CREATED);
		
		this.questionDao.saveOrUpdate(entity);
		
		return entity;
	}

	@Override
	public CustomQuestionDto nextCustomQuestion(String username, int cont) {
		CustomQuestionDto dto = new CustomQuestionDto();
		List<CustomQuestion> questions = new ArrayList<>();
		
		if (Arrays.stream(numberForVote).anyMatch((x) -> x == cont%10)) {
			questions = questionDao.findQuestionForVote(username);
		} else {
			questions = questionDao.findQuestionForPlay(username);
		}
		
		if (questions.size() < 5) {
			return dto;
		}
		
		Random rand = new Random();
	    int index = rand.nextInt(questions.size());
	    
	    Collections.shuffle(questions);
		
		dto = mapper.convertValue(questions.get(index), CustomQuestionDto.class);
		
		return dto;
	}

	@Override
	public void voteCustomQuestion(VoteQuestionDto dto) {
		CustomQuestion question = 
				this.questionDao.voteQuestion(
						new ObjectId(dto.getIdQuestion()), dto.isVote());
		
		calculateState(question);
	}

	@Override
	public UserInfoDto responseCustomQuestion(ResponseQuestionDto dto) {
		CheckUserInfo info = new CheckUserInfo();
		User user = userDao.findByUsername(dto.getUsername());
		CustomQuestion question = questionDao.find(new ObjectId( dto.getIdQuestion() ));
		
		user = info.checkResponseCustomQuestion(user, question, dto.isCorrect());
		user = info.checkChallangesTrophy(user);
		user = info.checkLevelRank(user, getCurrentLevelRank(user));
		
		this.checkCustomQuestion(question, dto.isCorrect());
		
		return info.getResponse();
	}
	
	private void checkCustomQuestion(CustomQuestion question, boolean isCorrect) {
		this.questionDao.responseQuestion(question.getId(), isCorrect);
	}
	
	private Rank getCurrentLevelRank(User user) {
		return levelRankDao.findByExp(user.getExperience());
	}
	
	private void calculateState(CustomQuestion question) {
		double numVotes = question.getNegativesVote() + question.getPositivesVote();
		double percentaje = question.getPositivesVote() / numVotes;
		
		if (numVotes >= minNumVotes) {
			if (percentaje > percentajeAccept)
				this.questionDao.changeState(question.getId(), StateQuestion.ACCEPT);
			else if (percentaje < percentajeDismiss)
				this.questionDao.changeState(question.getId(), StateQuestion.DISMISS);
		}
	}

	@Override
	public List<CustomQuestionDto> findQuestionsByUser(String username) {
		List<CustomQuestion> questions = this.questionDao.findByUser(username);
		List<CustomQuestionDto> questionsDto = new ArrayList<>();
		
		for (CustomQuestion question: questions) {
			CustomQuestionDto dto = mapper.convertValue(question, CustomQuestionDto.class);
			questionsDto.add(dto);
		}
		
		return questionsDto;
	}
	
	private void checkQuestion(CustomQuestionDto dto) throws Exception {
		if (dto.getQuestion().getType() == Question.OPTION) {
			int correct = 0, incorrect = 0;
			QuestionOptions question = (QuestionOptions) dto.getQuestion();
			
			for (Option option: question.getOptions()) {
				if (option.isCorrect())
					correct++;
				else
					incorrect++;
			}
			
			if (correct == 0) {
				throw new Exception("No hay opciones correctas");
			} else if (incorrect == 0) {
				throw new Exception("Todas las opciones son correctas");
			}
		} else if (dto.getQuestion().getType() == Question.CODE_BLOCK) {
			QuestionCodeBlock question = (QuestionCodeBlock) dto.getQuestion();
			if (question.getCodeBlocksCorrect() == null)
				throw new Exception("No hay bloques correctos");
			
			for (String blockCorrect: question.getCodeBlocksCorrect()) {
				boolean exist = false;
				for (String blockOption: question.getCodeBlocksOptions()) {
					if (blockCorrect.equals(blockOption)) 
						exist = true;
				}
				
				if (!exist)
					throw new Exception("Hay bloques correctos que no existen en opciones");
			}
		} else if (dto.getQuestion().getType() == Question.COMPLETE_CODE) {
			QuestionCompleteCode question = (QuestionCompleteCode) dto.getQuestion();
			if (question.getLinesCode().isEmpty()) {
				throw new Exception("No hay líneas para completar");
			}
			
			List<String> names = new ArrayList<>();
			
			question.getLinesCode().forEach(l -> names.add(l.getName()));
			
			if (names.size() != new HashSet<String>(names).toArray().length) {
				throw new Exception("Hay identificadores repetidos");
			}
		}
	}

}
