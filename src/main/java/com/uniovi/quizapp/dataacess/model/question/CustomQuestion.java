package com.uniovi.quizapp.dataacess.model.question;

import com.uniovi.quizapp.dataacess.model.general.DefaultEntity;
import com.uniovi.quizapp.dataacess.model.question.atributes.StateQuestion;

public class CustomQuestion extends DefaultEntity {
	
	private String username;
	private Question question;
	private StateQuestion state;
	
	private int positivesResponse;
	private int negativesResponse;
	
	private int positivesVote;
	private int negativesVote;
	
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
	public StateQuestion getState() {
		return state;
	}
	public void setState(StateQuestion state) {
		this.state = state;
	}
	public int getPositivesVote() {
		return positivesVote;
	}
	public void setPositivesVote(int positivesVote) {
		this.positivesVote = positivesVote;
	}
	public int getNegativesVote() {
		return negativesVote;
	}
	public void setNegativesVote(int negativesVote) {
		this.negativesVote = negativesVote;
	}
	public int getPositivesResponse() {
		return positivesResponse;
	}
	public void setPositivesResponse(int positivesResponse) {
		this.positivesResponse = positivesResponse;
	}
	public int getNegativesResponse() {
		return negativesResponse;
	}
	public void setNegativesResponse(int negativesResponse) {
		this.negativesResponse = negativesResponse;
	}
	
	

}
