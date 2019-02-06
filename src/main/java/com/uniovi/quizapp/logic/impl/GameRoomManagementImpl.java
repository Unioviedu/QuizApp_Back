package com.uniovi.quizapp.logic.impl;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniovi.quizapp.dataacess.dao.api.IExamDao;
import com.uniovi.quizapp.dataacess.dao.api.IGameRoomDao;
import com.uniovi.quizapp.dataacess.dao.api.IUserDao;
import com.uniovi.quizapp.dataacess.model.gameRoom.Exam;
import com.uniovi.quizapp.dataacess.model.gameRoom.ExamState;
import com.uniovi.quizapp.dataacess.model.gameRoom.ResultExam;
import com.uniovi.quizapp.dataacess.model.gameRoom.Room;
import com.uniovi.quizapp.dataacess.model.user.Notification;
import com.uniovi.quizapp.dataacess.model.user.NotificationType;
import com.uniovi.quizapp.dataacess.model.user.RoleUser;
import com.uniovi.quizapp.dataacess.model.user.User;
import com.uniovi.quizapp.logic.api.IGameRoomManagement;
import com.uniovi.quizapp.logic.general.AbstractManagement;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.CalificationDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ResultDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ShortRoomDto;

@Service
public class GameRoomManagementImpl extends AbstractManagement implements IGameRoomManagement {

	@Autowired
	private IGameRoomDao gameRoomDao;

	@Autowired
	private IExamDao examDao;

	@Autowired
	private IUserDao userDao;

	@Override
	public Room newGameRoom(RoomDto roomDto) throws Exception {
		User userAdmin = userDao.findByUsername(roomDto.getAdmin());
		
		if (userAdmin == null || !userAdmin.getRole().equals(RoleUser.ADMIN)) {
			throw new Exception("Este usuario no tiene el rol de administrador");
		}
		
		List<Room> oldRooms = gameRoomDao.findByAdmin(roomDto.getAdmin());
		
		for (Room room: oldRooms) {
			if (room.getTitle().equals(roomDto.getTitle()))
				throw new Exception("Ya hay una sala con ese título");
		}
		
		Room entity = mapper.convertValue(roomDto, Room.class);
		gameRoomDao.saveOrUpdate(entity);
		
		return entity;
	}

	@Override
	public Exam newExam(ExamDto examDto) throws Exception {
		checkDateExams(examDto);
		Room room = gameRoomDao.find(new ObjectId(examDto.getIdRoom()));
		
		for (Exam exam: room.getExams()) {
			if (exam.getTitle().equals(examDto.getTitle()))
				throw new Exception("Ya hay un examen con ese título");
		}
		Exam exam = mapper.convertValue(examDto, Exam.class);
		room.getExams().add(exam);

		examDao.saveOrUpdate(exam);
		gameRoomDao.saveOrUpdate(room);
		
		return exam;
	}

	@Override
	public List<ShortRoomDto> findRoomsByAdmin(String admin) {
		List<ShortRoomDto> rooms = new ArrayList<>();

		for (Room room : gameRoomDao.findByAdmin(admin)) {
			ShortRoomDto dto = mapper.convertValue(room, ShortRoomDto.class);
			rooms.add(dto);
		}

		return rooms;
	}

	@Override
	public RoomDto findRoomById(String id) {
		Room entity = gameRoomDao.find(new ObjectId(id));
		RoomDto dto = mapper.convertValue(entity, RoomDto.class);
		dto.setExams( checkStateExams(dto.getExams()) );
		
		return dto;
	}

	private List<ExamDto> checkStateExams(List<ExamDto> exams) {
		for (ExamDto examDto: exams) {
			LocalDate today = new LocalDate();
			LocalDate begin = new LocalDate(examDto.getBeginDate());
			LocalDate finish = new LocalDate(examDto.getFinishDate());
			
			if (today.isBefore(begin)) {
				examDto.setState(ExamState.CREATED);
			}
			else if ( (today.equals(begin) || today.isAfter(begin)) && today.isBefore(finish)) {
				examDto.setState(ExamState.ACTIVE);
			}
			else if (today.isAfter(finish) || today.isEqual(finish)) {
				examDto.setState(ExamState.FINISH);
			} else {
				examDto.setState(ExamState.CLOSE);
			}
		}
		
		return exams;
	}

	@Override
	public ExamDto findExamById(String id) {
		Exam entity = examDao.find(new ObjectId(id));
		return mapper.convertValue(entity, ExamDto.class);
	}

	@Override
	public void addUserToRoom(RoomDto roomDto) {
		Room room = this.gameRoomDao.find(new ObjectId(roomDto.getId()));

		for (String username : roomDto.getUsers()) {
			room.getUsers().add(username);
		}

		this.gameRoomDao.saveOrUpdate(room);
	}

	@Override
	public void inviteUsersToRoom(RoomDto roomDto) {
		Room room = this.gameRoomDao.find(new ObjectId(roomDto.getId()));
		Notification notification = new Notification(NotificationType.INVITE_ROOM);
		notification.setTitle("Estas invitado a la sala " + room.getTitle());
		notification.setDescription("Estas invitado a esta sala");
		notification.getExtraInfo().put("idRoom", room.getId().toString());

		for (String username : roomDto.getUsers()) {
			User user = this.userDao.findByUsername(username);

			user.getNotifications().add(notification);
			//this.template.convertAndSend("/" + user.getUsername(), notification);

			this.userDao.saveOrUpdate(user);
		}
	}

	@Override
	public List<ShortRoomDto> findRoomsByUser(String username) {
		List<ShortRoomDto> rooms = new ArrayList<>();

		for (Room room : gameRoomDao.findByField("users", username)) {
			ShortRoomDto dto = mapper.convertValue(room, ShortRoomDto.class);
			rooms.add(dto);
		}
		
		return rooms;
	}

	@Override
	public CalificationDto addCalificationExam(ResultDto dto) {
		Double note = convertNumericCalificate(dto.getNumCorrectExercises(), dto.getNumIncorrectExercises());
		
		Exam exam = this.examDao.find(new ObjectId(dto.getIdExam()));
		ResultExam calification = mapper.convertValue(dto, ResultExam.class);
		calification.setCalification(note);
		exam.getResults().put(dto.getUsername(), calification);
		
		this.examDao.saveOrUpdate(exam);
		return new CalificationDto(dto.getNumCorrectExercises(),
				dto.getNumIncorrectExercises(),
				note);
	}
	
	private Double convertNumericCalificate(int numCorrect, int numIncorrect) {
		return (double) numCorrect * 10 / (numCorrect + numIncorrect);
	}
	
	private void checkDateExams(ExamDto examDto) throws Exception {
		LocalDate beginDate = new LocalDate(examDto.getBeginDate());
		LocalDate finishDate = new LocalDate(examDto.getFinishDate());
		
		if (beginDate.isAfter(finishDate)) {
			throw new Exception("La fecha de activación no puede ser posterior a la de finalización");
		} else if (LocalDate.now().isAfter(finishDate)) {
			throw new Exception("La fecha de finalización no puede ser posterior a la actual");
		}
	}

}
