package com.uniovi.quizapp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.uniovi.quizapp.dataacess.dao.api.ICustomQuestionDao;
import com.uniovi.quizapp.dataacess.model.formattedText.FormattedText;
import com.uniovi.quizapp.dataacess.model.question.CustomQuestion;
import com.uniovi.quizapp.dataacess.model.question.Question;
import com.uniovi.quizapp.dataacess.model.question.QuestionCodeBlock;
import com.uniovi.quizapp.dataacess.model.question.QuestionCompleteCode;
import com.uniovi.quizapp.dataacess.model.question.QuestionOptions;
import com.uniovi.quizapp.dataacess.model.question.atributes.LineCode;
import com.uniovi.quizapp.dataacess.model.question.atributes.Option;
import com.uniovi.quizapp.logic.api.ICustomQuestionManagement;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.CustomQuestionDto;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QuestionTest {
	@Autowired
	public ICustomQuestionManagement questionManagement;
	@Autowired
	public ICustomQuestionDao questionDao;
	
	private CustomQuestionDto customQuestion;
	private QuestionOptions questionOptions;
	private QuestionCodeBlock questionCodeBlock;
	private QuestionCompleteCode questionCompleteCode;
	
	@Before
	public void initObjects() {
		customQuestion = new CustomQuestionDto();
		customQuestion.setUsername("edu");
		
		questionOptions = new QuestionOptions();
		questionOptions.setTitle("Prueba");
		questionOptions.setStatement(new FormattedText("Pregunta de prueba"));
		questionOptions.setOrden(1);
		questionOptions.setType(Question.OPTION);
		
		questionCodeBlock = new QuestionCodeBlock();
		questionCodeBlock.setTitle("Prueba");
		questionCodeBlock.setStatement(new FormattedText("Pregunta de prueba"));
		questionCodeBlock.setOrden(1);
		questionCodeBlock.setType(Question.CODE_BLOCK);
		
		questionCompleteCode = new QuestionCompleteCode();
		questionCompleteCode.setTitle("Prueba");
		questionCompleteCode.setStatement(new FormattedText("Pregunta de prueba"));
		questionCompleteCode.setOrden(1);
		questionCompleteCode.setType(Question.COMPLETE_CODE);
	}
	
	@Test
	public void createQuestionOptionsCorrect() {
		questionOptions.setOptions(Arrays.asList(new Option("o1", true), 
				new Option("o2", false)));
		
		customQuestion.setQuestion(questionOptions); 
		
		CustomQuestion entity;
		try {
			entity = questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			entity = null;
		}
		
		assertNotNull(entity);
		
		questionDao.deleteById(entity.getId());
	}
	
	@Test
	public void createQuestionOptionsAllCorrect() {
		questionOptions.setOptions(Arrays.asList(new Option("o1", true), 
				new Option("o2", true)));
		
		customQuestion.setQuestion(questionOptions); 
		
		String msg = "";
		try {
			questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("Todas las opciones son correctas", msg);
	}
	
	@Test
	public void createQuestionOptionsAllIncorrect() {
		questionOptions.setOptions(Arrays.asList(new Option("o1", false), 
				new Option("o2", false)));
		
		customQuestion.setQuestion(questionOptions); 
		
		String msg = "";
		try {
			questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("No hay opciones correctas", msg);
	}
	
	@Test
	public void createQuestionCodeBlockCorrect() {
		questionCodeBlock.setCodeBlocksOptions(new String[] {"c1", "c2"} );
		questionCodeBlock.setCodeBlocksCorrect(new String[] {"c1"} );
		
		customQuestion.setQuestion(questionCodeBlock); 
		
		CustomQuestion entity;
		try {
			entity = questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			entity = null;
		}
		
		assertNotNull(entity);
		
		questionDao.deleteById(entity.getId());
	}
	
	@Test
	public void createQuestionCodeBlockWithoutCorrect() {
		customQuestion.setQuestion(questionCodeBlock); 
		
		String msg = "";
		try {
			questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("No hay bloques correctos", msg);
	}
	
	@Test
	public void createQuestionCodeBlockDiferentsBlocks() {
		questionCodeBlock.setCodeBlocksOptions(new String[] {"c1", "c2"} );
		questionCodeBlock.setCodeBlocksCorrect(new String[] {"c3"} );
		
		customQuestion.setQuestion(questionCodeBlock); 
		
		String msg = "";
		try {
			questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("Hay bloques correctos que no existen en opciones", msg);
	}
	
	@Test
	public void createQuestionCompleteCode() {
		LineCode line = new LineCode("l1", new String[] {"1"});
		questionCompleteCode.setLinesCode(Arrays.asList(line));
		
		customQuestion.setQuestion(questionCompleteCode); 
		
		CustomQuestion entity;
		try {
			entity = questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			entity = null;
		}
		
		assertNotNull(entity);
		
		questionDao.deleteById(entity.getId());
	}
	
	@Test
	public void createQuestionCompleteCodeWithoutLines() {
		customQuestion.setQuestion(questionCompleteCode); 
		
		String msg = "";
		try {
			questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("No hay líneas para completar", msg);
	}
	
	@Test
	public void createQuestionCompleteCodeSameIdentifier() {
		LineCode line = new LineCode("l1", new String[] {"1"});
		LineCode line2 = new LineCode("l1", new String[] {"1"});
		questionCompleteCode.setLinesCode(Arrays.asList(line, line2));
		
		customQuestion.setQuestion(questionCompleteCode); 
		
		String msg = "";
		try {
			questionManagement.newCustomQuestion(customQuestion);
		} catch (Exception e) {
			msg = e.getMessage();
		}
	
		assertEquals("Hay identificadores repetidos", msg);
	}

}
