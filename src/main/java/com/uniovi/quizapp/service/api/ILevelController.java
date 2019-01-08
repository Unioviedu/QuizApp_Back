package com.uniovi.quizapp.service.api;

import com.uniovi.quizapp.logic.impl.dto.UserInfoDto;
import com.uniovi.quizapp.logic.impl.dto.level.LevelDto;
import com.uniovi.quizapp.logic.impl.dto.level.ResultLevelDto;

public interface ILevelController {
	
	public LevelDto getLevelByCod(String cod, String username);
	
	public UserInfoDto responseLevel(ResultLevelDto resultLevelDto);

}
