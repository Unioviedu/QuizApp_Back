package com.uniovi.quizapp.logic.impl.dto;

import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class NotificationDto extends DtoGeneric {
	private String id;
	private String title;
	private String description;
	private boolean active;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	
	
}
