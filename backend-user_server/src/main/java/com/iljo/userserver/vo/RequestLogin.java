package com.iljo.userserver.vo;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RequestLogin {

    @NotNull(message="UserId cannot be null")
    @Size(min = 6, max=20, message = "UserId not be less than six characters")
    private String userId;

    @NotNull(message="Password cannot be null")
    @Size(min = 8, message = "Password must be equal or grater than 8 characters")
    private String encryptedPwd;
}
