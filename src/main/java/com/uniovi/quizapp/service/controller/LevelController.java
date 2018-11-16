package com.uniovi.quizapp.service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uniovi.quizapp.logic.api.ILevelManagement;
import com.uniovi.quizapp.service.api.ILevelController;
import com.uniovi.quizapp.service.dto.UserInfoDto;
import com.uniovi.quizapp.service.dto.level.LevelDto;
import com.uniovi.quizapp.service.dto.level.ResultLevelDto;

@RestController
public class LevelController implements ILevelController {
	
	@Autowired
	private ILevelManagement levelManagement;
	
	@Override
	@RequestMapping("/responseLevel")
	public UserInfoDto responseLevel(@RequestBody ResultLevelDto rl) {
		return levelManagement.responseLevel(rl);
	}

	@Override
	@RequestMapping("/level/{codSectionLevel}")
	public LevelDto getLevelByCod(@PathVariable("codSectionLevel") String codSectionLevel, String username) {
		return levelManagement.getLevelByCod(codSectionLevel, username);
	}

}
