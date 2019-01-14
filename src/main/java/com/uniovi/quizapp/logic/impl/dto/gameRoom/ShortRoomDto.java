package com.uniovi.quizapp.logic.impl.dto.gameRoom;

import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class ShortRoomDto extends DtoGeneric {
	private String id;
	private String admin;
	private String title;
	private String description;
	
	public ShortRoomDto() {}
	
	public ShortRoomDto(String title, String description) {
		this.title = title;
		this.description = description;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getAdmin() {
		return admin;
	}
	public void setAdmin(String admin) {
		this.admin = admin;
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
