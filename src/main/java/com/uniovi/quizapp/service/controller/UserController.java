package com.uniovi.quizapp.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uniovi.quizapp.dataacess.model.user.RoleUser;
import com.uniovi.quizapp.logic.api.IUserManagement;
import com.uniovi.quizapp.logic.impl.dto.UserDto;
import com.uniovi.quizapp.service.api.IUserController;

@RestController
public class UserController implements IUserController {
	
	@Autowired
	public IUserManagement userManagement;

	@Override
	@RequestMapping("/user")
	public UserDto getUser(@RequestParam("username") String username) {
		return userManagement.getUser(username);
	}

	@Override
	@RequestMapping("/register")
	public UserDto register(@RequestBody UserDto userDto) throws Exception {
		return userManagement.registerNewUser(userDto);
	}

	@Override
	@RequestMapping("/uniqueUsername")
	public boolean isUniqueUsername(@RequestParam("username") String username) {
		return userManagement.isCorrectUsername(username);
	}
	
	@Override
	@RequestMapping("/findByUsername")
	public List<UserDto> filterByUsername(@RequestParam("username") String username) {
		return userManagement.filterUserByName(username);
	}
	
	@Override
	@RequestMapping("/findAllNotifications")
	public UserDto findAllNotifications(@RequestParam("username") String username) {
		return userManagement.findAllNotifications(username);
	}

	@Override
	@RequestMapping("/getUserRole")
	public RoleUser getUserRole(String username) {
		return userManagement.findUserRole(username);
	}

	@Override
	@RequestMapping("/removeNotification")
	public void removeNotification(@RequestParam("username") String username, @RequestParam("id") String id) {
		userManagement.removeNotification(username, id);
	}
	
	

}
