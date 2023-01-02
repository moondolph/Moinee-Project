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

import java.util.List;

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

        // 저장한 정보를 dto에 담아서 리턴한다.
        return mapper.map(userRoomTagEntity1, RoomTagDto.class);
    }

    @Override
    public List<User_Room_TagEntity> getRoomTagByUserId(String userId) {
        // 입력한 아이디에 해당하는 데이터를 모두 받아와서 리스트에 담는다.
        List<User_Room_TagEntity> userRoomTagEntityList = userRoomTagRepository.findAllByUserId(userId);

        return userRoomTagEntityList;
    }

    // 입력받은 roomTagID에 해당하는 데이터를 삭제하는 메소드
    @Override
    public void deleteRoomTag(RoomTagID roomTagID) {
        userRoomTagRepository.deleteById(roomTagID);
    }
}





