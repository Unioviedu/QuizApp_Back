package com.uniovi.quizapp.logic.impl.dto.level;

import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class ShortLevelDto extends DtoGeneric {
	
	private String id;
	private Integer codSection;
	private String title;
	private int experience;
	
	private int orden;
	private boolean isMain;
	private boolean isUnlocked;
	private boolean isComplete;
	
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public boolean isMain() {
		return isMain;
	}
	public void setMain(boolean isMain) {
		this.isMain = isMain;
	}
	public boolean isComplete() {
		return isComplete;
	}
	public void setComplete(boolean isComplete) {
		this.isComplete = isComplete;
	}
	public boolean isUnlocked() {
		return isUnlocked;
	}
	public void setUnlocked(boolean isUnlocked) {
		this.isUnlocked = isUnlocked;
	}
	public int getOrden() {
		return orden;
	}
	public void setOrden(int orden) {
		this.orden = orden;
	}
	public Integer getCodSection() {
		return codSection;
	}
	public void setCodSection(Integer codSection) {
		this.codSection = codSection;
	}

}
