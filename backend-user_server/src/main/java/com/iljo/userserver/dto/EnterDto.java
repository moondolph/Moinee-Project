package com.iljo.userserver.dto;

import lombok.Data;

@Data
public class EnterDto {
    // 유저의 닉네임
    private String userID;

    // 유저가 참여하고 있는 방의 id
    private Long roomId;

}
