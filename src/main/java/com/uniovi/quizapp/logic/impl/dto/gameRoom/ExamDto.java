package com.uniovi.quizapp.logic.impl.dto.gameRoom;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.uniovi.quizapp.dataacess.model.gameRoom.ExamState;
import com.uniovi.quizapp.dataacess.model.gameRoom.ResultExam;
import com.uniovi.quizapp.dataacess.model.question.Question;
import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class ExamDto extends DtoGeneric {
	private String id;
	private String idRoom;
	
	private String title;
	private String description;
	private ExamState state;
	
	private String beginDate;
	private String finishDate;
	
	private List<Question> exercises = new ArrayList<>();
	private Map<String, ResultExam> results = new HashMap<>();
	
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
	public ExamState getState() {
		return state;
	}
	public void setState(ExamState state) {
		this.state = state;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Map<String, ResultExam> getResults() {
		return results;
	}
	public void setResults(Map<String, ResultExam> results) {
		this.results = results;
	}
}
