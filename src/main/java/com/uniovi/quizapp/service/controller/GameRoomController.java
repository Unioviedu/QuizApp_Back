package com.uniovi.quizapp.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uniovi.quizapp.logic.api.IGameRoomManagement;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;
import com.uniovi.quizapp.service.api.IGameRoomController;

@RestController
public class GameRoomController implements IGameRoomController {
	
	@Autowired
	private IGameRoomManagement gameRoomManagement;

	@RequestMapping("/newGameRoom")
	@Override
	public void newGameRoom(@RequestBody RoomDto roomDto) {
		this.gameRoomManagement.newGameRoom(roomDto);
	}
	
	@RequestMapping("/newExam")
	@Override
	public void newExam(@RequestBody ExamDto examDto) {
		this.gameRoomManagement.newExam(examDto);
	}

	@RequestMapping("/findByAdmin")
	@Override
	public List<RoomDto> findByAdmin(@RequestParam("admin") String admin) {
		return this.gameRoomManagement.findByAdmin(admin);
	}
	
	@RequestMapping("/findById")
	@Override
	public RoomDto findRoomById(@RequestParam("id") String id) {
		return this.gameRoomManagement.findRoomById(id);
	}
	
	@RequestMapping("/findExamById")
	@Override
	public ExamDto findExamById(@RequestParam("id") String id) {
		return this.gameRoomManagement.findExamById(id);
	}
	
	@RequestMapping("/findExamsByRoom")
	@Override
	public List<ExamDto> findExamsByRoom(@RequestParam("roomId") String roomId) {
		return this.gameRoomManagement.findExamsByRoom(roomId);
	}

}
