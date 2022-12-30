package com.iljo.userserver.vo;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RequestUser {

    @NotNull(message="UserId cannot be null")
    @Size(min = 6, max=20, message = "UserId not be less than six characters")
    private String userId;

    @NotNull(message="Password cannot be null")
    @Size(min = 8, message = "Password must be equal or grater than 8 characters")
    private String password;

    @NotNull(message="Name cannot be null")
    @Size(min = 2, max = 6, message = "Name not be less than two characters")
    private String name;

    @NotNull(message="Birthday cannot be null")
    private String birthday;

    @NotNull(message="Email cannot be null")
    @Email
    private String email;

    @NotNull(message="Gender cannot be null")
    private String gender;

    @NotNull(message="Address cannot be null")
    @Size(min = 2, message = "Address must be equal or grater than 8 characters")
    private String address;

    @NotNull()
    private Double latitude;

    @NotNull()
    private Double longitude;

    @NotNull(message="Thumbnail cannot be null")
    private String thumbnail;



}
