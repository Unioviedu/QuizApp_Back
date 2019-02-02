package com.uniovi.quizapp.logic.api;

import java.util.List;

import com.uniovi.quizapp.dataacess.model.user.RoleUser;
import com.uniovi.quizapp.logic.impl.dto.UserDto;

public interface IUserManagement {
	
	public UserDto getUser (String username);
	public UserDto registerNewUser (UserDto userDto) throws Exception;
	public boolean isCorrectUsername(String username);
	public List<UserDto> filterUserByName(String username);
	public UserDto findAllNotifications(String username);
	public RoleUser findUserRole(String username);
	public void removeNotification(String username, String id);
}
