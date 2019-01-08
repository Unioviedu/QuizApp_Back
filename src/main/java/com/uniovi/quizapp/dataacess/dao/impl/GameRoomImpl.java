package com.uniovi.quizapp.dataacess.dao.impl;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import com.uniovi.quizapp.dataacess.dao.api.IGameRoomDao;
import com.uniovi.quizapp.dataacess.dao.general.IDaoGenericImpl;
import com.uniovi.quizapp.dataacess.model.gameRoom.Room;

@Service
public class GameRoomImpl extends IDaoGenericImpl<Room, ObjectId> implements IGameRoomDao {

	@Override
	public Class<Room> getEntityClass() {
		return Room.class;
	}

	@Override
	public List<Room> findByAdmin(String admin) {
		return this.findByField("admin", admin);
	}

	

}
