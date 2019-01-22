package com.uniovi.quizapp.logic.impl.dto.gameRoom;

import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class ResultDto extends DtoGeneric {
	private String username;
	private String idExam;
	private Integer numCorrectExercises;
	private Integer numIncorrectExercises;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
	public String getIdExam() {
		return idExam;
	}
	public void setIdExam(String idExam) {
		this.idExam = idExam;
	}
	
	

}
