package com.iljo.userserver.service;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.dto.FollowID;
import com.iljo.userserver.jpa.UserRepository;
import com.iljo.userserver.jpa.User_FollowRepository;
import com.iljo.userserver.jpa.User_Follow_TagEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

        // 저장한 정보를 dto에 담아서 리턴한다.
        return mapper.map(user_follow_tagEntity1, FollowDto.class);
    }

    // 입력한 아이디에 해당하는 followUserId 를 읽는 메소드
    @Override
    public List<User_Follow_TagEntity> getFollowByUserId(String userId) {
        // 입력한 아이디에 해당하는 데이터를 모두 받아와서 리스트에 담는다.
        List<User_Follow_TagEntity> follow_tagEntityList = user_followRepository.findAllByUserId(userId);

        return follow_tagEntityList;
    }

    // 팔로우를 취소 할 때, USER_FOLLOW_TAG 테이블에서 값을 지우는 메소드
    @Override
    public void deleteFollow(FollowID followID) {
        user_followRepository.deleteById(followID);
        
    }
}





