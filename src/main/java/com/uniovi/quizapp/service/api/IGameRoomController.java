package com.uniovi.quizapp.service.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;

public interface IGameRoomController {
	
	public void newGameRoom(RoomDto roomDto);
	
	public List<RoomDto> findByAdmin(String admin);

	RoomDto findRoomById(String id);

	public void newExam(ExamDto examDto);

	ExamDto findExamById(String id);

	List<ExamDto> findExamsByRoom(String roomId);

}
