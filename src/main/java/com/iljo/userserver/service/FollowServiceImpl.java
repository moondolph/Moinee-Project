package com.iljo.userserver.service;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.jpa.UserRepository;
import com.iljo.userserver.jpa.User_FollowRepository;
import com.iljo.userserver.jpa.User_Follow_TagEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FollowServiceImpl implements FollowService{

    User_FollowRepository user_followRepository;

    @Autowired
    public FollowServiceImpl(User_FollowRepository user_followRepository) {
        this.user_followRepository = user_followRepository;
    }

    @Override
    public FollowDto addFollow(FollowDto followDto) {
        // 맵퍼를 이용하여 엔티티에 Dto에서 받아온 값을 집어넣는다.
        ModelMapper mapper = new ModelMapper();
        User_Follow_TagEntity user_follow_tagEntity = mapper.map(followDto, User_Follow_TagEntity.class);

        // save 기능을 이용하여 db에 저장한다.
        User_Follow_TagEntity user_follow_tagEntity1 = user_followRepository.save(user_follow_tagEntity);

        // 이걸 다시 리턴. 왜인지는 모르겠는걸..
        return mapper.map(user_follow_tagEntity1, FollowDto.class);
    }

    @Override
    public FollowDto getFollowByUserId(String userId) {
        return null;
    }

    @Override
    public void deleteFollow(String userId) {

    }
}





