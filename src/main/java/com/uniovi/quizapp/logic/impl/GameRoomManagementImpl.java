package com.uniovi.quizapp.logic.impl;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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

	@Autowired
	private SimpMessagingTemplate template;

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
	public List<ShortRoomDto> findByAdmin(String admin) {
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
			this.template.convertAndSend("/" + user.getUsername(), notification);

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
		Exam exam = this.examDao.find(new ObjectId(dto.getIdExam()));
		ResultExam calification = mapper.convertValue(dto, ResultExam.class);
		exam.getResults().put(dto.getUsername(), calification);
		
		this.examDao.saveOrUpdate(exam);
		return new CalificationDto(dto.getNumCorrectExercises(),
				dto.getNumIncorrectExercises(),
				convertNumericCalificate(dto.getNumCorrectExercises(), dto.getNumIncorrectExercises()));
	}
	
	private Double convertNumericCalificate(int numCorrect, int numIncorrect) {
		return (double) numCorrect * 10 / (numCorrect + numIncorrect);
	}

}
