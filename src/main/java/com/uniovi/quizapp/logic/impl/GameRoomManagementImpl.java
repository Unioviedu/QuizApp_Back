package com.uniovi.quizapp.logic.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniovi.quizapp.dataacess.dao.api.IGameRoomDao;
import com.uniovi.quizapp.dataacess.model.gameRoom.Room;
import com.uniovi.quizapp.logic.api.IGameRoomManagement;
import com.uniovi.quizapp.logic.general.AbstractManagement;
import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;

@Service
public class GameRoomManagementImpl extends AbstractManagement implements IGameRoomManagement {
	
	@Autowired
	private IGameRoomDao gameRoomDao;

	@Override
	public void newGameRoom(RoomDto roomDto) {
		Room entity = mapper.convertValue(roomDto, Room.class);
		gameRoomDao.saveOrUpdate(entity);
	}

	@Override
	public List<RoomDto> findByAdmin(String admin) {
		List<RoomDto> rooms = new ArrayList<RoomDto>();
		
		for (Room room: gameRoomDao.findByAdmin(admin)) {
			RoomDto dto = new RoomDto(room.getTitle(), room.getDescription());
			rooms.add(dto);
		}
		
		return rooms;
	}

}
