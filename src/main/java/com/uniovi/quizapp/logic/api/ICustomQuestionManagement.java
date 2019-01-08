package com.uniovi.quizapp.logic.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.UserInfoDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.CustomQuestionDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.ResponseQuestionDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.VoteQuestionDto;

public interface ICustomQuestionManagement {
	
	public void newCustomQuestion(CustomQuestionDto dto);
	
	public CustomQuestionDto nextCustomQuestion(String username, int cont);

	public void voteCustomQuestion(VoteQuestionDto dto);

	public UserInfoDto responseCustomQuestion(ResponseQuestionDto dto);

	public List<CustomQuestionDto> findQuestionsByUser(String username);

}
