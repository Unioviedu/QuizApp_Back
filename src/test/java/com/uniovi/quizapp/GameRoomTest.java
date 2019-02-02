package com.uniovi.quizapp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.uniovi.quizapp.dataacess.dao.api.IGameRoomDao;
import com.uniovi.quizapp.dataacess.model.gameRoom.Room;
import com.uniovi.quizapp.logic.api.IGameRoomManagement;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GameRoomTest {
	
	@Autowired
	public IGameRoomManagement gameRoomManagement;
	
	@Autowired
	public IGameRoomDao gameRoomDao;
	
	@Test
	public void newGameRoomCorrect() {
		RoomDto dto = new RoomDto();
		dto.setTitle("PruebaCorrecta");
		dto.setDescription("PruebaCorrecta");
		dto.setAdmin("edu");
		
		Room room;
		try {
			room = gameRoomManagement.newGameRoom(dto);
		} catch (Exception e) {
			room = null;
		}
		
		assertNotNull(room);
		
		gameRoomDao.delete(room);
	}
	
	@Test
	public void newGameRoomRepeat() {
		RoomDto dto = new RoomDto();
		dto.setTitle("Sala de prueba");
		dto.setDescription("Sala de prueba");
		dto.setAdmin("edu");
		
		RoomDto dto2 = new RoomDto();
		dto2.setTitle("Sala de prueba");
		dto2.setDescription("Sala de prueba");
		dto.setAdmin("edu");
		
		Room room = new Room();
		String msg = "";
		try {
			room = gameRoomManagement.newGameRoom(dto);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("Ya hay una sala con ese título", msg);
		
		gameRoomDao.delete(room);
	}
	
	@Test
	public void newGameRoomNotAdmin() {
		RoomDto dto = new RoomDto();
		dto.setTitle("PruebaCorrecta");
		dto.setDescription("PruebaCorrecta");
		dto.setAdmin("noAdmin");
		
		String msg = "";
		try {
			gameRoomManagement.newGameRoom(dto);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("Este usuario no tiene el rol de administrador", msg);
	}

}
