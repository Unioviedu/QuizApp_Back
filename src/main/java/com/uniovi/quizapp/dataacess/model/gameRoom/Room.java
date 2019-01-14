package com.uniovi.quizapp.dataacess.model.gameRoom;

import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.annotations.Reference;

import com.uniovi.quizapp.dataacess.model.general.DefaultEntity;

public class Room extends DefaultEntity {
	
	private String admin;
	private String title;
	private String description;
	
	private List<String> users = new ArrayList<>();
	@Reference
	private List<Exam> exams = new ArrayList<>();
	
	public Room() {}
	
	
	public String getAdmin() {
		return admin;
	}
	public void setAdmin(String admin) {
		this.admin = admin;
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


	public List<String> getUsers() {
		return users;
	}


	public void setUsers(List<String> users) {
		this.users = users;
	}


	
	
	
	
	
	

}
