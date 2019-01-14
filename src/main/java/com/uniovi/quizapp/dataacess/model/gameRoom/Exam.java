package com.uniovi.quizapp.dataacess.model.gameRoom;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mongodb.morphia.annotations.Entity;

import com.uniovi.quizapp.dataacess.model.general.DefaultEntity;
import com.uniovi.quizapp.dataacess.model.question.Question;

@Entity
public class Exam extends DefaultEntity {
	private String title;
	private String description;
	
	private String beginDate;
	private String finishDate;
	
	private List<Question> exercises = new ArrayList<>();
	private Map<String, ResultExam> results = new HashMap<>();
	
	public Exam() {}

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
	

	public String getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}

	public String getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(String finishDate) {
		this.finishDate = finishDate;
	}

	public List<Question> getExercises() {
		return exercises;
	}



	public void setExercises(List<Question> exercises) {
		this.exercises = exercises;
	}

	public Map<String, ResultExam> getResults() {
		return results;
	}

	public void setResults(Map<String, ResultExam> califications) {
		this.results = califications;
	}
	
	

}
