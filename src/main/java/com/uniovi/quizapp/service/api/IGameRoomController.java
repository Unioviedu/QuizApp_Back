package com.uniovi.quizapp.service.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.gameRoom.CalificationDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ResultDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ShortRoomDto;

public interface IGameRoomController {
	
	public void newGameRoom(RoomDto roomDto) throws Exception;
	
	public List<ShortRoomDto> findRoomsByAdmin(String admin);

	RoomDto findRoomById(String id);

	public void newExam(ExamDto examDto) throws Exception;

	ExamDto findExamById(String id);
	
	public void addUserToRoom(RoomDto room);
	
	public void inviteUsersToRoom(RoomDto room);

	List<ShortRoomDto> findRoomsByUser(String username);

	CalificationDto addResultExam(ResultDto dto);
}
