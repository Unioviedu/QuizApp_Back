package com.uniovi.quizapp.logic.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.section.SectionDto;
import com.uniovi.quizapp.logic.impl.dto.section.ShortSectionDto;

public interface ISectionManagement {
	
	public SectionDto getSectionByCod(Integer cod, String username);
	
	public List<ShortSectionDto> getSectionList(String username);

}
