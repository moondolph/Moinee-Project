package com.iljo.userserver.vo;

import lombok.Data;

// enter controller 에서는 Id 만 받아오면 되기 때문에
// Id만 보내주는 객체를 만들어보았습니다.
@Data
public class RequestRoomId {
    private Long roomId;
}
