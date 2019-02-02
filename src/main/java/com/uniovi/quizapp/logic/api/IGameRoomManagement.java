package com.uniovi.quizapp.logic.api;

import java.util.List;

import com.uniovi.quizapp.dataacess.model.gameRoom.Exam;
import com.uniovi.quizapp.dataacess.model.gameRoom.Room;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.CalificationDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ResultDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ShortRoomDto;

public interface IGameRoomManagement {
	
	public List<ShortRoomDto> findRoomsByAdmin(String admin);
	public List<ShortRoomDto> findRoomsByUser(String username);
	public RoomDto findRoomById(String id);
	public ExamDto findExamById(String id);
	
	public Room newGameRoom(RoomDto roomDto) throws Exception;
	public Exam newExam(ExamDto examDto) throws Exception;
	public void addUserToRoom(RoomDto room);
	public CalificationDto addCalificationExam(ResultDto dto);

	public void inviteUsersToRoom(RoomDto room);
}
