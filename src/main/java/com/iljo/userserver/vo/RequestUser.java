package com.iljo.userserver.vo;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RequestUser {

    @NotNull(message="UserId cannot be null")
    @Size(min = 2, message = "UserId not be less than two characters")
    @Email
    private String userId;

    @NotNull(message="Password cannot be null")
    @Size(min = 2, message = "Password must be equal or grater than 8 characters")
    private String password;

    @NotNull(message="Name cannot be null")
    @Size(min = 2, message = "Name not be less than two characters")
    private String name;

    @NotNull(message="Birthday cannot be null")
    private String birthday;

    @NotNull(message="Email cannot be null")
    @Size(min = 2, message = "Email not be less than two characters")
    @Email
    private String email;

    @NotNull(message="Gender cannot be null")
    private String gender;

    @NotNull(message="Address cannot be null")
    @Size(min = 2, message = "Address must be equal or grater than 8 characters")
    private String address;

    @NotNull(message="Latitude cannot be null")
    @Size(min = 2, message = "Latitude must be equal or grater than 8 characters")
    private Double latitude;

    @NotNull(message="Longitude cannot be null")
    @Size(min = 2, message = "Longitude must be equal or grater than 8 characters")
    private Double longitude;

    @NotNull(message="Thumbnail cannot be null")
    @Size(min = 2, message = "Thumbnail must be equal or grater than 8 characters")
    private String thumbnail;



}
