package com.uniovi.quizapp.logic.impl.dto.customQuestion;

import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class VoteQuestionDto extends DtoGeneric {
	
	private String idQuestion;
	private boolean vote;
	
	public String getIdQuestion() {
		return idQuestion;
	}
	public void setIdQuestion(String idQuestion) {
		this.idQuestion = idQuestion;
	}
	public boolean isVote() {
		return vote;
	}
	public void setVote(boolean vote) {
		this.vote = vote;
	}
	
	
}
