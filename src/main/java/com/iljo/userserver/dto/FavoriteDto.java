package com.iljo.userserver.dto;

import lombok.Data;

@Data
public class FavoriteDto {
    // 유저의 닉네임
    private String userId;

    // 유저가 선호하는 분야
    private String favorite;

    
}
