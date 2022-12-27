package com.iljo.social_room;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.iljo.social_room.jpa")
public class SocialRoomApplication {

    public static void main(String[] args) {
        SpringApplication.run(SocialRoomApplication.class, args);
    }

}
