package com.uniovi.quizapp.logic.impl.dto.gameRoom;

import java.util.ArrayList;
import java.util.List;


public class RoomDto extends ShortRoomDto {
	private List<String> users = new ArrayList<>();
	private List<ExamDto> exams = new ArrayList<>();
	
	public RoomDto() {} 
	
	public RoomDto(String title, String description) {
		super(title, description);
	}

	public List<ExamDto> getExams() {
		return exams;
	}

	public void setExams(List<ExamDto> exams) {
		this.exams = exams;
	}

	public List<String> getUsers() {
		return users;
	}

	public void setUsers(List<String> users) {
		this.users = users;
	}
	

}
