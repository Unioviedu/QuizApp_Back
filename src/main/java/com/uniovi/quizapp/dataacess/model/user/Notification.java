package com.uniovi.quizapp.dataacess.model.user;

import java.util.HashMap;
import java.util.Map;

import org.bson.types.ObjectId;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

public class Notification {
	@JsonSerialize(using = ToStringSerializer.class)
	private ObjectId id;
	private String title;
	private String description;
	private Map<String, Object> extraInfo = new HashMap<>();
	private NotificationType type;
	
	public Notification() {
		id = new ObjectId();
	}
	
	public Notification(NotificationType type) {
		this();
		this.type = type;
	}
	
	public ObjectId getId() {
		return id;
	}
	public void setId(ObjectId id) {
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

	public NotificationType getType() {
		return type;
	}

	public void setType(NotificationType type) {
		this.type = type;
	}

	public Map<String, Object> getExtraInfo() {
		return extraInfo;
	}

	public void setExtraInfo(Map<String, Object> extraInfo) {
		this.extraInfo = extraInfo;
	}
	
	
	

}
