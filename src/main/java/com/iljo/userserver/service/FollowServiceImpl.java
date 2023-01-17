package com.iljo.userserver.service;

import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.dto.FollowID;
import com.iljo.userserver.jpa.UserFollowRepository;
import com.iljo.userserver.jpa.UserFollowTagEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowServiceImpl implements FollowService{

    UserFollowRepository userfollowRepository;

    @Autowired
    public FollowServiceImpl(UserFollowRepository userfollowRepository) {
        this.userfollowRepository = userfollowRepository;
    }

    @Override
    public FollowDto addFollow(FollowDto followDto) {
        // 맵퍼를 이용하여 엔티티에 Dto에서 받아온 값을 집어넣는다.
        ModelMapper mapper = new ModelMapper();
        UserFollowTagEntity userfollowtagEntity = mapper.map(followDto, UserFollowTagEntity.class);

        // save 기능을 이용하여 db에 저장한다.
        UserFollowTagEntity userfollowtagEntity1 = userfollowRepository.save(userfollowtagEntity);

        // 저장한 정보를 dto에 담아서 리턴한다.
        return mapper.map(userfollowtagEntity1, FollowDto.class);
    }

    // 입력한 아이디에 해당하는 followUserId 를 읽는 메소드
    @Override
    public List<UserFollowTagEntity> getFollowByUserId(String userId) {
        // 입력한 아이디에 해당하는 데이터를 모두 받아와서 리스트에 담는다.
        List<UserFollowTagEntity> followtagEntityList = userfollowRepository.findAllByUserId(userId);

        return followtagEntityList;
    }

    // 팔로우를 취소 할 때, USER_FOLLOW_TAG 테이블에서 값을 지우는 메소드
    @Override
    public void deleteFollow(FollowID followID) {
        userfollowRepository.deleteById(followID);
        
    }
}





