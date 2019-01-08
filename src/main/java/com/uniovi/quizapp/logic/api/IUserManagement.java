package com.uniovi.quizapp.logic.api;

import com.uniovi.quizapp.logic.impl.dto.UserDto;

public interface IUserManagement {
	
	public UserDto getUser (String username);
	public UserDto registerNewUser (UserDto userDto);
	public boolean isCorrectUsername(String username);

}
