package com.uniovi.quizapp.dataacess.model.question;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.uniovi.quizapp.dataacess.model.formattedText.FormattedText;

@JsonTypeInfo(
		use = JsonTypeInfo.Id.NAME, 
		property ="type", 
		include = JsonTypeInfo.As.PROPERTY,
		visible = true)
@JsonSubTypes({
	@JsonSubTypes.Type(value = QuestionOptions.class, name = "option"),
	@JsonSubTypes.Type(value = QuestionCodeBlock.class, name = "codeBlock")
})
public abstract class Question {
	private String title;
	private String type;
	private FormattedText statement;
	private Integer orden;
	
	public Question() {}

	public Question(String title, FormattedText statement, String type, Integer orden) {
		super();
		this.title = title;
		this.statement = statement;
		this.type = type;
		this.setOrden(orden);
	}

	public FormattedText getStatement() {
		return statement;
	}

	public void setStatement(FormattedText statement) {
		this.statement = statement;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getOrden() {
		return orden;
	}

	public void setOrden(Integer orden) {
		this.orden = orden;
	}
	
	
	

}
