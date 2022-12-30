package com.iljo.userserver.service;

import com.iljo.userserver.dto.EnterDto;

public interface EnterService {
    EnterDto enterRoom(EnterDto enterDto);

    EnterDto getEnterByUserId(String userId);

    void leaveTheRoom(String userId);

}





