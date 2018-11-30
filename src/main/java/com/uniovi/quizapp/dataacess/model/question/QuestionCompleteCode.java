package com.uniovi.quizapp.dataacess.model.question;

import java.util.ArrayList;
import java.util.List;

import com.uniovi.quizapp.dataacess.model.formattedText.FormattedText;
import com.uniovi.quizapp.dataacess.model.question.atributes.LineCode;

public class QuestionCompleteCode extends Question {
	
	private List<LineCode> linesCode = new ArrayList<>();
	
	public QuestionCompleteCode() {}
	
	public QuestionCompleteCode(String title, FormattedText statement, Integer orden) {
		super(title, statement, Question.COMPLETE_CODE, orden);
	}

	public List<LineCode> getLinesCode() {
		return linesCode;
	}

	public void setLinesCode(List<LineCode> linesCode) {
		this.linesCode = linesCode;
	}
	
	public void addLineCode(LineCode... codes) {
		for (LineCode code: codes) {
			linesCode.add(code);
		}
	}

}
