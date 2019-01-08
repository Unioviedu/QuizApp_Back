package com.uniovi.quizapp.logic.impl.dto.customQuestion;

import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class ResponseQuestionDto extends DtoGeneric {
	
	private String idQuestion;
	private String username;
	private boolean isCorrect;
	
	public String getIdQuestion() {
		return idQuestion;
	}
	public void setIdQuestion(String idQuestion) {
		this.idQuestion = idQuestion;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public boolean isCorrect() {
		return isCorrect;
	}
	public void setCorrect(boolean isCorrect) {
		this.isCorrect = isCorrect;
	}
	
	

}
