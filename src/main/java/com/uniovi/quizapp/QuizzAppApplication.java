package com.uniovi.quizapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableAutoConfiguration
public class QuizzAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizzAppApplication.class, args);
	}
}