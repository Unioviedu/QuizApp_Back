package com.uniovi.quizapp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Arrays;

import org.joda.time.LocalDate;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.uniovi.quizapp.dataacess.dao.api.IExamDao;
import com.uniovi.quizapp.dataacess.dao.api.IGameRoomDao;
import com.uniovi.quizapp.dataacess.model.formattedText.FormattedText;
import com.uniovi.quizapp.dataacess.model.gameRoom.Exam;
import com.uniovi.quizapp.dataacess.model.gameRoom.Room;
import com.uniovi.quizapp.dataacess.model.question.Question;
import com.uniovi.quizapp.dataacess.model.question.QuestionOptions;
import com.uniovi.quizapp.dataacess.model.question.atributes.Option;
import com.uniovi.quizapp.logic.api.IGameRoomManagement;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.ExamDto;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ExamTest {
	private Room room;
	private ExamDto examDto;

	@Autowired
	public IGameRoomManagement gameRoomManagement;
	@Autowired
	public IExamDao examDao;
	@Autowired
	public IGameRoomDao gameRoomDao;

	@Before
	public void initObjects() {
		examDto = new ExamDto();
		examDto.setTitle("Examen prueba");
		examDto.setDescription("Exam de prueba");
		examDto.setIdRoom(room.getId().toString());
		
		QuestionOptions questionOptions = new QuestionOptions();
		questionOptions.setTitle("Prueba");
		questionOptions.setStatement(new FormattedText("Pregunta de prueba"));
		questionOptions.setOrden(1);
		questionOptions.setType(Question.OPTION);
		questionOptions.setOptions(Arrays.asList(new Option("o1", true), 
				new Option("o2", false)));
		
		examDto.getExercises().add(questionOptions);
	}
	
	@Before
	public void initialRoom() {
		RoomDto dto = new RoomDto();
		dto.setTitle("PruebaExamenes");
		dto.setDescription("Description");
		dto.setAdmin("edu");
		
		Room room = new Room();
		try {
			room = this.gameRoomManagement.newGameRoom(dto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		this.room = room;
	}
	
	@After
	public void removeRoom() {
		this.gameRoomDao.delete(room);
	}

	@Test
	public void newExamCorrect() {
		examDto.setBeginDate(LocalDate.now().toString());
		examDto.setFinishDate(LocalDate.now().plusDays(2).toString());
		
		Exam exam;
		try {
			exam = gameRoomManagement.newExam(examDto);
		} catch (Exception e) {
			exam = null;
		}
		
		assertNotNull(exam);
		
		examDao.delete(exam);
	}
	
	@Test
	public void newExamRepeat() {
		examDto.setBeginDate(LocalDate.now().toString());
		examDto.setFinishDate(LocalDate.now().plusDays(2).toString());
		
		Exam exam = new Exam();
		String msg = "";
		try {
			exam = gameRoomManagement.newExam(examDto);
			gameRoomManagement.newExam(examDto);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("Ya hay un examen con ese título", msg);
		examDao.delete(exam);
	}
	
	@Test
	public void newExamIncorrectDates() {
		examDto.setBeginDate(LocalDate.now().plusDays(2).toString());
		examDto.setFinishDate(LocalDate.now().toString());
		
		String msg = "";
		try {
			gameRoomManagement.newExam(examDto);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("La fecha de activación no puede ser posterior a la de finalización", msg);
	}
	
	@Test
	public void newExamIncorrectDates2() {
		examDto.setBeginDate(LocalDate.now().minusDays(2).toString());
		examDto.setFinishDate(LocalDate.now().minusDays(1).toString());
		
		String msg = "";
		try {
			gameRoomManagement.newExam(examDto);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("La fecha de finalización no puede ser posterior a la actual", msg);
	}
}
