package com.iljo.iljoapigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class IljoApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(IljoApiGatewayApplication.class, args);
	}

}
