package com.iljo.userserver.dto;

import lombok.Data;

@Data
public class UserDto {

    private String userId;

    private String password;

    private String name;

    private String birthday;

    private String email;

    private String gender;

    private String address;

    private Double latitude;

    private Double longitude;

    private String thumbnail;


}
