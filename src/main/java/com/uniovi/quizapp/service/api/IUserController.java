package com.uniovi.quizapp.service.api;

import java.util.List;

import com.uniovi.quizapp.dataacess.model.user.RoleUser;
import com.uniovi.quizapp.logic.impl.dto.UserDto;

public interface IUserController {
	
	public UserDto getUser(String username);
	public UserDto register(UserDto userDto);
	public boolean isUniqueUsername(String username);
	public UserDto findAllNotifications(String username);
	public List<UserDto> filterByUsername(String username);
	public RoleUser getUserRole(String username);
	public void removeNotification(String username, String id);
}
