package com.example.user_evaluation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.iljo.user_evaluation.jpa")
public class UserEvaluationApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserEvaluationApplication.class, args);
	}

}
