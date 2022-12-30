package com.iljo.userserver.vo;

import lombok.Data;

// UserId만 보내주는 객체를 만들어보았습니다.
@Data
public class RequestUserId {
    private String followUserId;
}
