package com.iljo.userserver.dto;

import lombok.Data;

@Data
public class RoomTagDto {
    // 유저의 닉네임
    private String userId;

    // 유저가 관심을 가지는 방의 id
    private Long roomId;

}
