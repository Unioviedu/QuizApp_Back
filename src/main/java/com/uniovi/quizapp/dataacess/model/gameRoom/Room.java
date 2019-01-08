package com.uniovi.quizapp.dataacess.model.gameRoom;

import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.annotations.Reference;

import com.uniovi.quizapp.dataacess.model.general.DefaultEntity;
import com.uniovi.quizapp.dataacess.model.user.User;

public class Room extends DefaultEntity {
	
	private String admin;
	private String title;
	private String description;
	
	@Reference
	private List<User> users = new ArrayList<>();
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


	public List<User> getUsers() {
		return users;
	}


	public void setUsers(List<User> users) {
		this.users = users;
	}
	
	
	
	
	

}
