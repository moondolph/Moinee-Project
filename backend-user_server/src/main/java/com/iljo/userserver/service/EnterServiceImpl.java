package com.iljo.userserver.service;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.EnterID;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.jpa.EnterRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnterServiceImpl implements EnterService{

    EnterRepository enterRepository;

    @Autowired
    public EnterServiceImpl(EnterRepository enterRepository) {
        this.enterRepository = enterRepository;
    }

    // 방에 입장할 때 enter 테이블에 데이터를 넣는 메소드
    @Override
    public EnterDto enterRoom(EnterDto enterDto) {
        // 맵퍼를 이용하여 엔티티에 Dto에서 받아온 값을 집어넣는다.
        ModelMapper mapper = new ModelMapper();
        EnterEntity enterEntity = mapper.map(enterDto, EnterEntity.class);

        // save 기능을 이용하여 db에 저장한다.
        EnterEntity enterEntity1 = enterRepository.save(enterEntity);

        // 저장한 정보를 dto에 담아서 리턴한다.
        return mapper.map(enterEntity1, EnterDto.class);
    }

    // 입력한 userId가 들어있는 Enter테이블의 데이터들을 불러오는 메소드
    @Override
    public List<EnterEntity> getEnterByUserId(String userId) {
        // 입력한 아이디에 해당하는 데이터를 모두 받아와서 리스트에 담는다.
        List<EnterEntity> enterEntityList = enterRepository.findAllByUserId(userId);

        return enterEntityList;
    }

    // 입력한 roomId가 들어있는 Enter테이블의 데이터들을 불러오는 메소드
    @Override
    public List<EnterEntity> getUserByRoomId(Long roomId) {
        List<EnterEntity> enterEntity = enterRepository.findAllByRoomId(roomId);
        return enterEntity;
    }

    // 방에서 나올 때 enter 테이블에서 값을 지우는 메소드
    @Override
    public void leaveTheRoom(EnterID enterID) {
        enterRepository.deleteById(enterID);
    }
}





