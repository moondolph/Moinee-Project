package com.iljo.userserver.service;

import com.iljo.userserver.dto.RoomTagDto;
import com.iljo.userserver.dto.RoomTagID;
import com.iljo.userserver.jpa.UserRepository;
import com.iljo.userserver.jpa.User_Follow_TagEntity;
import com.iljo.userserver.jpa.User_Room_TagEntity;
import com.iljo.userserver.jpa.User_Room_TagRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

@Service
public class RoomTagServiceImpl implements RoomTagService{

    User_Room_TagRepository userRoomTagRepository;

    public RoomTagServiceImpl(User_Room_TagRepository userRoomTagRepository) {
        this.userRoomTagRepository = userRoomTagRepository;
    }

    @Override
    public RoomTagDto addRoomTag(RoomTagDto roomTagDto) {
        // 맵퍼를 이용하여 엔티티에 Dto에서 받아온 값을 집어넣는다.
        ModelMapper mapper = new ModelMapper();
        User_Room_TagEntity userRoomTagEntity = mapper.map(roomTagDto, User_Room_TagEntity.class);

        // save 기능을 이용하여 db에 저장한다.
        User_Room_TagEntity userRoomTagEntity1 = userRoomTagRepository.save(userRoomTagEntity);

        // 이걸 다시 리턴. 왜인지는 모르겠는걸..
        return mapper.map(userRoomTagEntity1, RoomTagDto.class);
    }

    @Override
    public RoomTagDto getRoomTagByUserId(String userId) {
        return null;
    }

    @Override
    public void deleteRoomTag(RoomTagID roomTagID) {
        userRoomTagRepository.deleteById(roomTagID);
    }
}





