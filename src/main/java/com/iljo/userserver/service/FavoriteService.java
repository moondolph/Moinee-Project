package com.iljo.userserver.service;

import com.iljo.userserver.dto.FavoriteID;
import com.iljo.userserver.jpa.UserFavoriteEntity;

import java.util.List;

public interface FavoriteService {
    void addFavorite(List<FavoriteID> favoriteIDList);

    List<UserFavoriteEntity> getFavoriteByUserId(String userId);

    void deleteFavorite(FavoriteID favoriteID);

}





