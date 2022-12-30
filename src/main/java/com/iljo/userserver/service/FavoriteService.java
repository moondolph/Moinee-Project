package com.iljo.userserver.service;

import com.iljo.userserver.dto.FavoriteDto;

public interface FavoriteService {
    FavoriteDto addFavorite(FavoriteDto favoriteDto);

    FavoriteDto getFavoriteByUserId(String userId);

    void deleteFavorite(String userId);

}





