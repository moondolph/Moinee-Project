package com.iljo.userserver.jpa;

import com.iljo.userserver.dto.FavoriteID;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface UserFavoriteRepository extends CrudRepository<UserFavoriteEntity, FavoriteID> {

    List<UserFavoriteEntity> findAllByUserId(String userId);

}





