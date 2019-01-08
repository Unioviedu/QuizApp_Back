package com.uniovi.quizapp.logic.impl.dto;

import java.util.ArrayList;
import java.util.List;

import com.uniovi.quizapp.dataacess.model.user.Rank;
import com.uniovi.quizapp.dataacess.model.user.ResultChallange;
import com.uniovi.quizapp.logic.impl.dto.general.DtoGeneric;

public class UserInfoDto extends DtoGeneric {
	
	private List<String> levelsUnlock = new ArrayList<>();
	private List<String> sectionsUnlock = new ArrayList<>();
	private List<ResultChallange> challangesComplete = new ArrayList<>();
	private List<ResultChallange> trophiesComplete = new ArrayList<>();
	private Rank newRank;
	private int newExp;
	
	public List<String> getLevelsUnlock() {
		return levelsUnlock;
	}
	public void setLevelsUnlock(List<String> levelsUnlock) {
		this.levelsUnlock = levelsUnlock;
	}
	public List<String> getSectionsUnlock() {
		return sectionsUnlock;
	}
	public void setSectionsUnlock(List<String> sectionsUnlock) {
		this.sectionsUnlock = sectionsUnlock;
	}
	public int getNewExp() {
		return newExp;
	}
	public void setNewExp(int newExp) {
		this.newExp = newExp;
	}

	public void addLevel(String levelTitle) {
		levelsUnlock.add(levelTitle);
	}
	
	public void addSection(String sectionTitle) {
		sectionsUnlock.add(sectionTitle);
	}
	
	public void addExp(int exp) {
		this.newExp = this.newExp + exp;
	}
	
	public void addChallange(ResultChallange challange) {
		challangesComplete.add(challange);
	}
	public void addTrophy(ResultChallange trophy) {
		trophiesComplete.add(trophy);
	}
	public List<ResultChallange> getChallangesComplete() {
		return challangesComplete;
	}
	public void setChallangesComplete(List<ResultChallange> challangesComplete) {
		this.challangesComplete = challangesComplete;
	}
	public List<ResultChallange> getTrophiesComplete() {
		return trophiesComplete;
	}
	public void setTrophiesComplete(List<ResultChallange> trophiesComplete) {
		this.trophiesComplete = trophiesComplete;
	}
	public Rank getNewRank() {
		return newRank;
	}
	public void setNewRank(Rank newRank) {
		this.newRank = newRank;
	}
	
	
	
	

}
