package com.uniovi.quizapp.service.dto.section;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.uniovi.quizapp.dataacess.model.formattedText.FormattedText;
import com.uniovi.quizapp.dataacess.model.user.ResultChallange;
import com.uniovi.quizapp.service.dto.level.ShortLevelDto;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SectionDto extends ShortSectionDto {
	
	private FormattedText documentation;
	private Set<ShortLevelDto> levels = new HashSet<>();
	private Set<ResultChallange> challanges = new HashSet<>();
	
	public Set<ShortLevelDto> getLevels() {
		return levels;
	}
	public void setLevels(Set<ShortLevelDto> levels) {
		this.levels = levels;
	}
	public Set<ResultChallange> getChallanges() {
		return challanges;
	}
	public void setChallanges(Set<ResultChallange> challanges) {
		this.challanges = challanges;
	}
	public FormattedText getDocumentation() {
		return documentation;
	}
	public void setDocumentation(FormattedText documentation) {
		this.documentation = documentation;
	}

}
