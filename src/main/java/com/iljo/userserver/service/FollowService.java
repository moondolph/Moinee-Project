package com.iljo.userserver.service;

import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.dto.FollowID;
import com.iljo.userserver.jpa.User_Follow_TagEntity;

import java.util.List;

public interface FollowService {
    FollowDto addFollow(FollowDto followDto);

    List<User_Follow_TagEntity> getFollowByUserId(String userId);

    void deleteFollow(FollowID followID);


}





