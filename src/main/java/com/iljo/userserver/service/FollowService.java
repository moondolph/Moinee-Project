package com.iljo.userserver.service;

import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.dto.FollowID;
import com.iljo.userserver.jpa.UserFollowTagEntity;
import java.util.List;

public interface FollowService {
    FollowDto addFollow(FollowDto followDto);

    List<UserFollowTagEntity> getFollowByUserId(String userId);

    void deleteFollow(FollowID followID);


}





