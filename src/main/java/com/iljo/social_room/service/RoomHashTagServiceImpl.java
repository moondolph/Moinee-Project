package com.iljo.social_room.service;

import com.iljo.social_room.dto.RoomHashTagDto;
import com.iljo.social_room.dto.RoomHashTagId;
import com.iljo.social_room.jpa.RoomHashTagEntity;
import com.iljo.social_room.jpa.RoomHashTagRepository;
import com.iljo.social_room.vo.RequestRoomHashTag;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomHashTagServiceImpl implements RoomHashTagService{

    RoomHashTagRepository roomHashTagRepository;

    @Autowired
    public RoomHashTagServiceImpl(RoomHashTagRepository roomHashTagRepository) {
        this.roomHashTagRepository = roomHashTagRepository;
    }

    @Override
    public Iterable<RoomHashTagEntity> createHashTag(List<RequestRoomHashTag> requestRoomHashTagList) {

        List<RoomHashTagEntity> roomHashTagEntityList = new ArrayList<>();
        requestRoomHashTagList.forEach((rRT) -> {
            roomHashTagEntityList.add( new ModelMapper().map(rRT, RoomHashTagEntity.class));
        });


        return roomHashTagRepository.saveAll(roomHashTagEntityList);
    }

    @Override
    public Iterable<RoomHashTagEntity> findByRoomId(Long roomId)
    {
        return roomHashTagRepository.findRoomHashTagEntitiesByRoomId(roomId);
    }

    @Override
    public void deleteHashTag(List<RequestRoomHashTag> requestRoomHashTagList)
    {
        List<RoomHashTagEntity> roomHashTagEntityList = new ArrayList<>();

        requestRoomHashTagList.forEach((rRT) -> {
            roomHashTagEntityList.add( new ModelMapper().map(rRT, RoomHashTagEntity.class));
        });

        roomHashTagRepository.deleteAll(roomHashTagEntityList);
    }
}
