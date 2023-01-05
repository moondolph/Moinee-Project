package com.example.userevaluation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication
@EnableDiscoveryClient
//@EntityScan("com.iljo.userevaluation.jpa")
public class UserEvaluationApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserEvaluationApplication.class, args);
	}

}
