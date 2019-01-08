package com.uniovi.quizapp.dataacess.dao.api;

import java.util.List;

import org.bson.types.ObjectId;

import com.uniovi.quizapp.dataacess.dao.general.IDaoGeneric;
import com.uniovi.quizapp.dataacess.model.gameRoom.Room;

public interface IGameRoomDao extends IDaoGeneric<Room, ObjectId>{
	
	public List<Room> findByAdmin(String admin);

}
