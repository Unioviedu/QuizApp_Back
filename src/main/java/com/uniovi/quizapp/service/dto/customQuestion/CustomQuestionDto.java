package com.uniovi.quizapp.service.dto.customQuestion;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.uniovi.quizapp.dataacess.model.question.Question;
import com.uniovi.quizapp.dataacess.model.question.atributes.StateQuestion;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CustomQuestionDto {
	
	private String id;
	private String username;
	private Question question;
	private StateQuestion state;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public StateQuestion getState() {
		return state;
	}
	public void setState(StateQuestion state) {
		this.state = state;
	}
	
	

}
