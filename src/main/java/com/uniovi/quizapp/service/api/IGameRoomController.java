package com.uniovi.quizapp.service.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.gameRoom.RoomDto;

public interface IGameRoomController {
	
	public void newGameRoom(RoomDto roomDto);
	
	public List<RoomDto> findByAdmin(String admin);

}
