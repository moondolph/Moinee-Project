package com.iljo.userserver.service;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.EnterID;

public interface EnterService {
    EnterDto enterRoom(EnterDto enterDto);

    EnterDto getEnterByUserId(String userId);

    // 방에서 나올 때 enter 테이블에서 값을 지우는 메소드
    void leaveTheRoom(EnterID enterID);
}





