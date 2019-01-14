package com.uniovi.quizapp.logic.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.gameRoom.CalificationDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ResultDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ShortRoomDto;

public interface IGameRoomManagement {
	
	public List<ShortRoomDto> findByAdmin(String admin);
	
	public void newGameRoom(RoomDto roomDto);

	public RoomDto findRoomById(String id);

	public void newExam(ExamDto examDto);

	public ExamDto findExamById(String id);

	public void addUserToRoom(RoomDto room);

	public void inviteUsersToRoom(RoomDto room);

	public List<ShortRoomDto> findRoomsByUser(String username);

	public CalificationDto addCalificationExam(ResultDto dto);

}
