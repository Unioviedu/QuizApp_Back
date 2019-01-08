package com.uniovi.quizapp.logic.impl.dto.level;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.uniovi.quizapp.dataacess.model.question.Question;

public class LevelDto extends ShortLevelDto {
	private String idSection;
	
	private int numAttemps;
	private int numCorrectQuestion;
	private int numIncorrectQuestion;
	
	private List<String> nextLevels = new ArrayList<>();
	private Set<Question> questions = new HashSet<>();
	
	
	public Set<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}
	public int getNumAttemps() {
		return numAttemps;
	}
	public void setNumAttemps(int numAttemps) {
		this.numAttemps = numAttemps;
	}
	public int getNumCorrectQuestion() {
		return numCorrectQuestion;
	}
	public void setNumCorrectQuestion(int numCorrectQuestion) {
		this.numCorrectQuestion = numCorrectQuestion;
	}
	public int getNumIncorrectQuestion() {
		return numIncorrectQuestion;
	}
	public void setNumIncorrectQuestion(int numIncorrectQuestion) {
		this.numIncorrectQuestion = numIncorrectQuestion;
	}
	public List<String> getNextLevels() {
		return nextLevels;
	}
	public void setNextLevels(List<String> nextLevels) {
		this.nextLevels = nextLevels;
	}
	
	public String getIdSection() {
		return idSection;
	}
	public void setIdSection(String idSection) {
		this.idSection = idSection;
	}
	
	
}
