package com.iljo.userserver.service;

import com.iljo.userserver.dto.RoomTagDto;
import com.iljo.userserver.jpa.UserRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

@Service
public class RoomTagServiceImpl implements RoomTagService{

    UserRepository userRepository;

    public RoomTagServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public RoomTagDto addRoomTag(RoomTagDto roomTagDto) {
        return null;
    }

    @Override
    public RoomTagDto getRoomTagByUserId(String userId) {
        return null;
    }

    @Override
    public void deleteRoomTag(String userId) {

    }
}





