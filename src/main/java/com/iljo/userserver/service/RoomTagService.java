package com.iljo.userserver.service;

import com.iljo.userserver.dto.RoomTagDto;
import com.iljo.userserver.dto.RoomTagID;

public interface RoomTagService {
    RoomTagDto addRoomTag(RoomTagDto roomTagDto);

    RoomTagDto getRoomTagByUserId(String userId);

    void deleteRoomTag(RoomTagID roomTagID);

}





