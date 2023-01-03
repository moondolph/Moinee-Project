package com.iljo.userserver.vo;

import lombok.Data;

/**
 * 회원정보를 얻을 때 방 정보를 보내주기 위해 만든 response
 * */
@Data
public class ResponseRoomId {

    private Long roomId;
}
