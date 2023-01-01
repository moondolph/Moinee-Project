package com.iljo.userserver.jpa;

import com.iljo.userserver.dto.FavoriteID;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface User_FavoriteRepository extends CrudRepository<User_FavoriteEntity, FavoriteID> {

    List<User_FavoriteEntity> findAllByUserId(String userId);

}





