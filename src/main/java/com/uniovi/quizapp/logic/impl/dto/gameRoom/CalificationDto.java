package com.uniovi.quizapp.logic.impl.dto.gameRoom;

public class CalificationDto {
	private Double numericCalification;
	private Integer numCorrectExercises;
	private Integer numIncorrectExercises;
	
	public CalificationDto() {
		
	}
	
	public CalificationDto(Integer numCorrectExercises, Integer numIncorrectExercises, Double numericCalification) {
		super();
		this.numericCalification = numericCalification;
		this.numCorrectExercises = numCorrectExercises;
		this.numIncorrectExercises = numIncorrectExercises;
	}
	
	public Double getNumericCalification() {
		return numericCalification;
	}
	public void setNumericCalification(Double numericCalification) {
		this.numericCalification = numericCalification;
	}
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

	
}
