package com.iljo.social_room.service;

import com.iljo.social_room.dto.RoomDto;
import com.iljo.social_room.jpa.RoomEntity;

import java.util.List;


public interface RoomService {
    RoomEntity createRoom(RoomDto roomDto);
    List<RoomEntity> getRoomByAll();
    List<RoomEntity> findByCategory(String category);
    RoomEntity getRoomInfo(Long roomId);
    RoomEntity updateRoomInfo(Long roomId, RoomDto roomDto);
    RoomEntity deleteRoom(Long roomId);
}
