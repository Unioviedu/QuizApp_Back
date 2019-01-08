package com.uniovi.quizapp.service.api;

import com.uniovi.quizapp.logic.impl.dto.UserDto;

public interface IUserController {
	
	public UserDto getUser(String username);
	public UserDto register(UserDto userDto);
	public boolean isUniqueUsername(String username);

}
