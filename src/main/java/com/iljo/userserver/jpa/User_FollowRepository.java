package com.iljo.userserver.jpa;

import com.iljo.userserver.dto.FollowID;
import org.springframework.data.repository.CrudRepository;


public interface User_FollowRepository extends CrudRepository<User_Follow_TagEntity, FollowID> {



}





