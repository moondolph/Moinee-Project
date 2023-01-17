package com.iljo.userserver.jpa;

import com.iljo.userserver.dto.FollowID;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface UserFollowRepository extends CrudRepository<UserFollowTagEntity, FollowID> {
    List<UserFollowTagEntity> findAllByUserId(String userId);


}





