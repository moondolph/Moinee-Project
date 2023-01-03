package com.iljo.userserver.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseUser {
    private String userId;

    private String encryptedPwd;

    private String name;

    private String birthday;

    private String email;

    private String gender;

    private String address;

    private Double latitude;

    private Double longitude;

    private String thumbnail;

    private List<ResponseRoomId> rooms;


}
