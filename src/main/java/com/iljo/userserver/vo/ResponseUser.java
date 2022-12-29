package com.iljo.userserver.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
public class ResponseUser {
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
