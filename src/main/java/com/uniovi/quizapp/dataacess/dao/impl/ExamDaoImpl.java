package com.uniovi.quizapp.dataacess.dao.impl;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import com.uniovi.quizapp.dataacess.dao.api.IExamDao;
import com.uniovi.quizapp.dataacess.dao.general.IDaoGenericImpl;
import com.uniovi.quizapp.dataacess.model.gameRoom.Exam;

@Service
public class ExamDaoImpl extends IDaoGenericImpl<Exam, ObjectId> implements IExamDao {

	@Override
	public Class<Exam> getEntityClass() {
		return Exam.class;
	}

}
