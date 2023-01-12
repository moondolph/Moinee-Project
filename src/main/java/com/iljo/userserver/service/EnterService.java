package com.iljo.userserver.service;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.EnterID;
import com.iljo.userserver.jpa.EnterEntity;

import java.util.List;

public interface EnterService {
    EnterDto enterRoom(EnterDto enterDto);

    List<EnterEntity> getEnterByUserId(String userId);

    // 입력한 roomId가 들어있는 Enter테이블의 데이터들을 불러오는 메소드
    List<EnterEntity> getUserByRoomId(Long roomId);

    // 방에서 나올 때 enter 테이블에서 값을 지우는 메소드
    void leaveTheRoom(EnterID enterID);
}





