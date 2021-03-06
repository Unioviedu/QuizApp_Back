package com.uniovi.quizapp.service.api;

import java.util.List;

import com.uniovi.quizapp.logic.impl.dto.section.SectionDto;
import com.uniovi.quizapp.logic.impl.dto.section.ShortSectionDto;

public interface ISectionController {
	
	public List<ShortSectionDto> getSectionList(String username);
	
	public SectionDto getSection(Integer codSection, String username);

}
