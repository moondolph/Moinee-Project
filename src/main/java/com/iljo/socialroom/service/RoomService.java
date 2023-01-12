package com.iljo.socialroom.service;

import com.iljo.socialroom.dto.RoomDto;
import com.iljo.socialroom.jpa.RoomEntity;

import java.util.List;


public interface RoomService {
    RoomEntity createRoom(RoomDto roomDto);
    List<RoomEntity> getRoomByAll();
    List<RoomEntity> findByCategory(String category);
    RoomEntity getRoomInfo(Long roomId);
    RoomEntity updateRoomInfo(Long roomId, RoomDto roomDto);
    RoomEntity deleteRoom(Long roomId);
}
