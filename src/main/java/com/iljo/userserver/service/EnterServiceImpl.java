package com.iljo.userserver.service;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.jpa.EnterRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnterServiceImpl implements EnterService{

    EnterRepository enterRepository;


    @Autowired
    public EnterServiceImpl(EnterRepository enterRepository) {
        this.enterRepository = enterRepository;
    }

    @Override
    public EnterDto enterRoom(EnterDto enterDto) {
        // 맵퍼를 이용하여 엔티티에 Dto에서 받아온 값을 집어넣는다.
        ModelMapper mapper = new ModelMapper();
        EnterEntity enterEntity = mapper.map(enterDto, EnterEntity.class);

        // save 기능을 이용하여 db에 저장한다.
        EnterEntity enterEntity1 = enterRepository.save(enterEntity);

        // 이걸 다시 리턴. 왜인지는 모르겠는걸..
        return mapper.map(enterEntity1, EnterDto.class);
    }

    @Override
    public EnterDto getEnterByUserId(String userId) {
        return null;
    }

    @Override
    public void leaveTheRoom(String userId) {

    }
}





