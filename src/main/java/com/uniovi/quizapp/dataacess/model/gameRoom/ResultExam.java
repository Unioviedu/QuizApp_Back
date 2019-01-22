package com.uniovi.quizapp.dataacess.model.gameRoom;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ResultExam {
	private Double calification;
	private Integer numCorrectExercises;
	private Integer numIncorrectExercises;
	
	public Integer getNumCorrectExercises() {
		return numCorrectExercises;
	}
	
	public void setNumCorrectExercises(Integer numCorrectExercises) {
		this.numCorrectExercises = numCorrectExercises;
	}
	
	public Integer getNumIncorrectExercises() {
		return numIncorrectExercises;
	}
	
	public void setNumIncorrectExercises(Integer numIncorrectExercises) {
		this.numIncorrectExercises = numIncorrectExercises;
	}

	public Double getCalification() {
		return calification;
	}

	public void setCalification(Double calification) {
		this.calification = calification;
	}
}
