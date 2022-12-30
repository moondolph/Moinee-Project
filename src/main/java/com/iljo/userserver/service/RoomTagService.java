package com.iljo.userserver.service;

import com.iljo.userserver.dto.RoomTagDto;

public interface RoomTagService {
    RoomTagDto addRoomTag(RoomTagDto roomTagDto);

    RoomTagDto getRoomTagByUserId(String userId);

    void deleteRoomTag(String userId);

}





