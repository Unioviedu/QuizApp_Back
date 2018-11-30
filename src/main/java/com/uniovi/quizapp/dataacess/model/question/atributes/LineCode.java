package com.uniovi.quizapp.dataacess.model.question.atributes;

public class LineCode {
	
	private String name;
	private String[] responses;
	
	public LineCode() {}
	
	public LineCode(String name, String[] responses) {
		super();
		this.name = name;
		this.responses = responses;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String[] getResponses() {
		return responses;
	}
	public void setResponses(String[] responses) {
		this.responses = responses;
	}
	
	
	

}
