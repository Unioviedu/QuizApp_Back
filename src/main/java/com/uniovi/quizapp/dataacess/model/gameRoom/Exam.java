package com.uniovi.quizapp.dataacess.model.gameRoom;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.annotations.Entity;

import com.uniovi.quizapp.dataacess.model.general.DefaultEntity;
import com.uniovi.quizapp.dataacess.model.question.Question;

@Entity
public class Exam extends DefaultEntity {
	private String title;
	private String description;
	private LocalDateTime beginDate;
	private LocalDateTime finishDate;
	
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

	public LocalDateTime getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(LocalDateTime beginDate) {
		this.beginDate = beginDate;
	}

	public LocalDateTime getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(LocalDateTime finishDate) {
		this.finishDate = finishDate;
	}

	public List<Question> getExercises() {
		return exercises;
	}



	public void setExercises(List<Question> exercises) {
		this.exercises = exercises;
	}
	
	

}
