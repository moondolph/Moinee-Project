package com.iljo.userserver.service;

import com.iljo.userserver.dto.FollowDto;

public interface FollowService {
    FollowDto addFollow(FollowDto followDto);

    FollowDto getFollowByUserId(String userId);

    void deleteFollow(String userId);


}





