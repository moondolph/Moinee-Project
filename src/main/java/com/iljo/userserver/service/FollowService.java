package com.iljo.userserver.service;

import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.dto.FollowID;

public interface FollowService {
    FollowDto addFollow(FollowDto followDto);

    FollowDto getFollowByUserId(String userId);

    void deleteFollow(FollowID followID);


}





