package com.iljo.userserver.vo;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RequestUser {

    @NotNull(message="UserId cannot be null")
    private String userId;

    @NotNull(message="Password cannot be null")
    private String password;

    @NotNull(message="Name cannot be null")
    private String name;

    @NotNull(message="Birthday cannot be null")
    private String birthday;

    @NotNull(message="Email cannot be null")
    private String email;

    @NotNull(message="Gender cannot be null")
    private String gender;

    @NotNull(message="Address cannot be null")
    private String address;

    @NotNull()
    private Double latitude;

    @NotNull()
    private Double longitude;

    @NotNull(message="Thumbnail cannot be null")
    private String thumbnail;



}
