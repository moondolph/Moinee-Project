package com.iljo.userserver.service;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.jpa.EnterRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class EnterServiceImpl implements EnterService{

    EnterRepository enterRepository;

    public EnterServiceImpl(EnterRepository enterRepository) {
        this.enterRepository = enterRepository;
    }

    @Override
    public EnterDto enterRoom(String userId, EnterDto enterDto) {

        ModelMapper mapper = new ModelMapper();

        EnterEntity enterEntity = mapper.map(enterDto, EnterEntity.class);

        EnterEntity enterEntity1 = enterRepository.save(enterEntity);

        return mapper.map(enterEntity1, EnterDto.class);
    }

    @Override
    public EnterDto getEntersByUserId(String userId) {
        return null;
    }

    @Override
    public void leaveTheRoom(String userId) {

    }
}





