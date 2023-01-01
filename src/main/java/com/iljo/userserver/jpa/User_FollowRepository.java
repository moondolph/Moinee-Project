package com.iljo.userserver.jpa;

import com.iljo.userserver.dto.FollowID;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface User_FollowRepository extends CrudRepository<User_Follow_TagEntity, FollowID> {
    List<User_Follow_TagEntity> findAllByUserId(String userId);


}





