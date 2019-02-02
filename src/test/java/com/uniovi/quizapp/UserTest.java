package com.uniovi.quizapp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.bson.types.ObjectId;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.uniovi.quizapp.dataacess.dao.api.IUserDao;
import com.uniovi.quizapp.logic.api.IUserManagement;
import com.uniovi.quizapp.logic.impl.dto.UserDto;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {
	
	@Autowired
	public IUserManagement userManagement;
	
	@Autowired
	public IUserDao userDao;
	
	@Test
	public void registerUserCorrect() {
		UserDto userDto = new UserDto();
		userDto.setUsername("prueba");
		userDto.setPassword("prueba");
		try {
			userManagement.registerNewUser(userDto);
		} catch (Exception e) {
			userDto = null;
		}
		
		assertNotNull(userDto);
		
		userDto = userManagement.getUser("prueba");
		userDao.deleteById(new ObjectId(userDto.getId()));
	}
	
	@Test
	public void registerUserRepeat() {
		UserDto userDto = new UserDto();
		userDto.setUsername("prueba");
		userDto.setPassword("prueba");
		
		UserDto userDto2 = new UserDto();
		userDto2.setUsername("prueba");
		userDto2.setPassword("prueba2");
		
		String msg = "";
		
		try {
			userManagement.registerNewUser(userDto);
			userManagement.registerNewUser(userDto2);
		} catch (Exception e) {
			msg = e.getMessage();
		}
		
		assertEquals("Usuario repetido", msg);
		
		userDto = userManagement.getUser("prueba");
		userDao.deleteById(new ObjectId(userDto.getId()));
	}

}
