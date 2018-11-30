package com.uniovi.quizapp.dataacess.model.question;

import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.annotations.Embedded;

import com.uniovi.quizapp.dataacess.model.formattedText.FormattedText;
import com.uniovi.quizapp.dataacess.model.question.atributes.Option;

public class QuestionOptions extends Question {
	@Embedded
	private List<Option> options = new ArrayList<>();
	
	public QuestionOptions() {}

	public QuestionOptions(String title, FormattedText statement, Integer orden) {
		super(title, statement, Question.OPTION, orden);
	}

	public List<Option> getOptions() {
		return options;
	}

	public void setOptions(List<Option> options) {
		this.options = options;
	}
	
	public void addOption(Option option) {
		options.add(option);
	}
	
	public void addOptions(Option...options) {
		for (Option option: options) {
			this.options.add(option);
		}
	}

	

}
