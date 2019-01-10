package com.uniovi.quizapp.dataacess.model.gameRoom;


import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDateTime;
import org.mongodb.morphia.annotations.Entity;

import com.uniovi.quizapp.dataacess.model.general.DefaultEntity;
import com.uniovi.quizapp.dataacess.model.question.Question;

@Entity
public class Exam extends DefaultEntity {
	private String title;
	private String description;
	private LocalDate beginDate;
	private LocalDate finishDate;
	
	private List<Question> exercises = new ArrayList<>();
	
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

	public LocalDate getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(LocalDate beginDate) {
		this.beginDate = beginDate;
	}

	public LocalDate getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(LocalDate finishDate) {
		this.finishDate = finishDate;
	}

	public List<Question> getExercises() {
		return exercises;
	}



	public void setExercises(List<Question> exercises) {
		this.exercises = exercises;
	}
	
	

}
