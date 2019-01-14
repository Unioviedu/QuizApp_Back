package com.uniovi.quizapp.logic.impl.dto;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.uniovi.quizapp.dataacess.model.user.Notification;
import com.uniovi.quizapp.dataacess.model.user.Rank;
import com.uniovi.quizapp.dataacess.model.user.ResultChallange;
import com.uniovi.quizapp.dataacess.model.user.RoleUser;
import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class UserDto extends DtoGeneric {
	private RoleUser role;
	private String id;
	private String username;
	private String password;
	private int experience;
	private String mail;
	private Rank levelRank;
	
	private Set<ResultChallange> resultTrophies = new HashSet<>();
	
	private List<Notification> notifications = new ArrayList<>();
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public Rank getLevelRank() {
		return levelRank;
	}
	public void setLevelRank(Rank levelRank) {
		this.levelRank = levelRank;
	}
	public Set<ResultChallange> getResultTrophies() {
		return resultTrophies;
	}
	public void setResultTrophies(Set<ResultChallange> resultTrophies) {
		this.resultTrophies = resultTrophies;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public RoleUser getRole() {
		return role;
	}
	public void setRole(RoleUser role) {
		this.role = role;
	}
	public List<Notification> getNotifications() {
		return notifications;
	}
	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}

}
