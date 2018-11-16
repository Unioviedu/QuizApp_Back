package com.uniovi.quizapp.logic.api;

import com.uniovi.quizapp.service.dto.UserInfoDto;
import com.uniovi.quizapp.service.dto.level.LevelDto;
import com.uniovi.quizapp.service.dto.level.ResultLevelDto;

public interface ILevelManagement {
	
	public UserInfoDto responseLevel(ResultLevelDto resultLevelDto);

	public LevelDto getLevelByCod(String codSectionLevel, String username);

}
