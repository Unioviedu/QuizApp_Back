package com.uniovi.quizapp.logic.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;

public interface IGameRoomManagement {
	
	public List<RoomDto> findByAdmin(String admin);
	
	public void newGameRoom(RoomDto roomDto);

	public RoomDto findRoomById(String id);

	public void newExam(ExamDto examDto);

	public ExamDto findExamById(String id);

	public List<ExamDto> findExamsByRoom(String roomId);

}
