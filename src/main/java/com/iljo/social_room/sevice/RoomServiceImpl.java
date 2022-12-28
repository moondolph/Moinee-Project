package com.iljo.social_room.sevice;

import com.iljo.social_room.dto.RoomDto;
import com.iljo.social_room.jpa.RoomEntity;
import com.iljo.social_room.jpa.RoomRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

public class RoomServiceImpl implements RoomService{
    RoomRepository roomRepository;

    @Override
    public RoomDto createRoom(RoomDto roomDto) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        RoomEntity roomEntity = mapper.map(roomDto, RoomEntity.class);
        roomRepository.save(roomEntity);

        RoomDto returnRoomDto = mapper.map(roomEntity, RoomDto.class);

        return returnRoomDto;
    }

    @Override
    public Iterable<RoomEntity> getRoomByAll() {

        return roomRepository.findAll();
    }

    @Override
    public Iterable<RoomEntity> findByCategory(String category) {

        return roomRepository.findByCategory(category);
    }

    @Override
    public RoomEntity getRoomInfo(Long room_id){
        return roomRepository.getRoomInfo(room_id);
    }

}

