package com.iljo.userserver.service;

import com.iljo.userserver.dto.FavoriteDto;
import com.iljo.userserver.dto.FavoriteID;
import com.iljo.userserver.jpa.User_FavoriteEntity;

import java.util.List;

public interface FavoriteService {
    void addFavorite(List<FavoriteID> favoriteIDList);

    List<User_FavoriteEntity> getFavoriteByUserId(String userId);

    void deleteFavorite(FavoriteID favoriteID);

}





