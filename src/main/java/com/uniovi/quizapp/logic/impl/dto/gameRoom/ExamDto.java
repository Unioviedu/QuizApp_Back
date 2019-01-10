package com.uniovi.quizapp.logic.impl.dto.gameRoom;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDate;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.joda.deser.LocalDateDeserializer;
import com.uniovi.quizapp.dataacess.model.question.Question;
import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class ExamDto extends DtoGeneric {
	private String idRoom;
	
	private String title;
	private String description;
	
	@JsonDeserialize(using=LocalDateDeserializer.class)
	private LocalDate beginDate;
	@JsonDeserialize(using=LocalDateDeserializer.class)
	private LocalDate finishDate;
	
	private List<Question> exercises = new ArrayList<>();
	
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
	public List<Question> getExercises() {
		return exercises;
	}
	public void setExercises(List<Question> exercises) {
		this.exercises = exercises;
	}
	public String getIdRoom() {
		return idRoom;
	}
	public void setIdRoom(String idRoom) {
		this.idRoom = idRoom;
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
	

}
