package com.uniovi.quizapp.service.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.UserInfoDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.CustomQuestionDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.ResponseQuestionDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.VoteQuestionDto;

public interface ICustomQuestionController {
	
	public List<CustomQuestionDto> getQuestionsByUser(String username);
	
	public void newQuestion(CustomQuestionDto dto) throws Exception;
	
	public CustomQuestionDto nextQuestion(String username, int contQuestion);
	
	public void voteQuestion(VoteQuestionDto dto);
	
	public UserInfoDto responseQuestion(ResponseQuestionDto dto);

}
