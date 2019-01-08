package com.uniovi.quizapp.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uniovi.quizapp.logic.api.ICustomQuestionManagement;
import com.uniovi.quizapp.logic.impl.dto.UserInfoDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.CustomQuestionDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.ResponseQuestionDto;
import com.uniovi.quizapp.logic.impl.dto.customQuestion.VoteQuestionDto;
import com.uniovi.quizapp.service.api.ICustomQuestionController;

@RestController
public class CustomQuestionController implements ICustomQuestionController {
	
	@Autowired
	private ICustomQuestionManagement management;
	
	@RequestMapping("/newQuestion")
	@Override
	public void newQuestion(@RequestBody CustomQuestionDto dto) {
		this.management.newCustomQuestion(dto);
	}
	
	@RequestMapping("/nextQuestion")
	@Override
	public CustomQuestionDto nextQuestion(@RequestParam("username") String username, 
			@RequestParam("cont") int contQuestion) {
		return management.nextCustomQuestion(username, contQuestion);
	}

	@RequestMapping("/voteQuestion")
	@Override
	public void voteQuestion(@RequestBody VoteQuestionDto dto) {
		management.voteCustomQuestion(dto);
	}
	
	@RequestMapping("/responseQuestion")
	@Override
	public UserInfoDto responseQuestion(@RequestBody ResponseQuestionDto dto) {
		return management.responseCustomQuestion(dto);
	}
	
	@RequestMapping("/questionsByUser")
	@Override
	public List<CustomQuestionDto> getQuestionsByUser(@RequestParam("username") String username) {
		return management.findQuestionsByUser(username);
	}
	
}