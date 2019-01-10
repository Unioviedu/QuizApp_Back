package com.uniovi.quizapp.logic.impl;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniovi.quizapp.dataacess.dao.api.IExamDao;
import com.uniovi.quizapp.dataacess.dao.api.IGameRoomDao;
import com.uniovi.quizapp.dataacess.model.gameRoom.Exam;
import com.uniovi.quizapp.dataacess.model.gameRoom.Room;
import com.uniovi.quizapp.logic.api.IGameRoomManagement;
import com.uniovi.quizapp.logic.general.AbstractManagement;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;

@Service
public class GameRoomManagementImpl extends AbstractManagement implements IGameRoomManagement {
	
	@Autowired
	private IGameRoomDao gameRoomDao;
	
	@Autowired
	private IExamDao examDao;

	@Override
	public void newGameRoom(RoomDto roomDto) {
		Room entity = mapper.convertValue(roomDto, Room.class);
		gameRoomDao.saveOrUpdate(entity);
	}
	
	@Override
	public void newExam(ExamDto examDto) {
		Room room = gameRoomDao.find(new ObjectId(examDto.getIdRoom()));
		Exam exam = mapper.convertValue(examDto, Exam.class);
		room.getExams().add(exam);
		
		examDao.saveOrUpdate(exam);
		gameRoomDao.saveOrUpdate(room);
	}

	@Override
	public List<RoomDto> findByAdmin(String admin) {
		List<RoomDto> rooms = new ArrayList<RoomDto>();
		
		for (Room room: gameRoomDao.findByAdmin(admin)) {
			RoomDto dto = mapper.convertValue(room, RoomDto.class);
			rooms.add(dto);
		}
		
		return rooms;
	}

	@Override
	public RoomDto findRoomById(String id) {
		Room entity = gameRoomDao.find(new ObjectId(id));
		return mapper.convertValue(entity, RoomDto.class);
	}

	@Override
	public ExamDto findExamById(String id) {
		Exam entity = examDao.find(new ObjectId(id));
		return mapper.convertValue(entity, ExamDto.class);
	}

	@Override
	public List<ExamDto> findExamsByRoom(String roomId) {
		List<ExamDto> exams = new ArrayList<ExamDto>();
		Room room = gameRoomDao.find(new ObjectId(roomId));
		
		for (Exam exam: room.getExams()) {
			ExamDto dto = mapper.convertValue(exam, ExamDto.class);
			exams.add(dto);
		}
		return exams;
	}

}
