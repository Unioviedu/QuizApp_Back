package com.uniovi.quizapp.service.api;

import com.uniovi.quizapp.service.dto.UserInfoDto;
import com.uniovi.quizapp.service.dto.level.LevelDto;
import com.uniovi.quizapp.service.dto.level.ResultLevelDto;

public interface ILevelController {
	
	public LevelDto getLevelByCod(String cod, String username);
	
	public UserInfoDto responseLevel(ResultLevelDto resultLevelDto);

}
