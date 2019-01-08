package com.uniovi.quizapp.logic.impl.dto.gameRoom;

import java.util.ArrayList;
import java.util.List;

import com.uniovi.quizapp.dataacess.model.gameRoom.Exam;
import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;


public class RoomDto extends DtoGeneric {
	
	private String admin;
	private String title;
	private String description;
	
	private List<String> users = new ArrayList<>();
	private List<Exam> exams = new ArrayList<>();
	
	public RoomDto() {} 
	
	public RoomDto(String title, String description) {
		super();
		this.title = title;
		this.description = description;
	}



	public String getAdmin() {
		return admin;
	}
	public void setAdmin(String admin) {
		this.admin = admin;
	}
	public List<String> getUsers() {
		return users;
	}
	public void setUsers(List<String> users) {
		this.users = users;
	}
	public List<Exam> getExams() {
		return exams;
	}
	public void setExams(List<Exam> exams) {
		this.exams = exams;
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
