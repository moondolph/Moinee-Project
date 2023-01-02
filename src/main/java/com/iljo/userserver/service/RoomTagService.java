package com.iljo.userserver.service;

import com.iljo.userserver.dto.RoomTagDto;
import com.iljo.userserver.dto.RoomTagID;
import com.iljo.userserver.jpa.User_Room_TagEntity;

import java.util.List;

public interface RoomTagService {
    RoomTagDto addRoomTag(RoomTagDto roomTagDto);

    List<User_Room_TagEntity> getRoomTagByUserId(String userId);

    void deleteRoomTag(RoomTagID roomTagID);

}





