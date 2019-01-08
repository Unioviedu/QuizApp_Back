package com.uniovi.quizapp.dataacess.model.gameRoom;

import java.util.ArrayList;
import java.util.List;

import com.uniovi.quizapp.dataacess.model.question.QuestionExam;

public class Exam {
	private String title;
	private String description;
	private List<QuestionExam> exercises = new ArrayList<>();
	
	public Exam() {}

	public List<QuestionExam> getExercises() {
		return exercises;
	}

	public void setExercises(List<QuestionExam> exercises) {
		this.exercises = exercises;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
