package com.uniovi.quizapp.logic.api;

import com.uniovi.quizapp.logic.impl.dto.UserInfoDto;
import com.uniovi.quizapp.logic.impl.dto.level.LevelDto;
import com.uniovi.quizapp.logic.impl.dto.level.ResultLevelDto;

public interface ILevelManagement {
	
	public UserInfoDto responseLevel(ResultLevelDto resultLevelDto);

	public LevelDto getLevelByCod(String codSectionLevel, String username);

}
