package com.iljo.social_room.sevice;

import com.iljo.social_room.dto.RoomDto;
import com.iljo.social_room.jpa.RoomEntity;

public interface RoomService {
    RoomDto createRoom(RoomDto roomDto);
    Iterable<RoomEntity> getRoomByAll();
    Iterable<RoomEntity> findByCategory(String category);

    RoomEntity getRoomInfo(Long room_id);


}
