package com.iljo.userserver.service;

import com.iljo.userserver.dto.FavoriteDto;
import com.iljo.userserver.jpa.User_FavoriteEntity;
import com.iljo.userserver.jpa.UserRepository;
import com.iljo.userserver.jpa.User_FavoriteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class FavoriteServiceImpl implements FavoriteService{

    User_FavoriteRepository user_FavoriteRepository;

    public FavoriteServiceImpl(User_FavoriteRepository user_FavoriteRepository) {
        this.user_FavoriteRepository = user_FavoriteRepository;
    }

    @Override
    public FavoriteDto addFavorite(FavoriteDto favoriteDto) {
        // 맵퍼를 이용하여 엔티티에 Dto에서 받아온 값을 집어넣는다.
        ModelMapper mapper = new ModelMapper();
        User_FavoriteEntity user_FavoriteEntity = mapper.map(favoriteDto, User_FavoriteEntity.class);

        // save 기능을 이용하여 db에 저장한다.
        User_FavoriteEntity user_FavoriteEntity1 = user_FavoriteRepository.save(user_FavoriteEntity);

        // 이걸 다시 리턴. 왜인지는 모르겠는걸..
        return mapper.map(user_FavoriteEntity1, FavoriteDto.class);
    }

    @Override
    public FavoriteDto getFavoriteByUserId(String userId) {
        return null;
    }

    @Override
    public void deleteFavorite(String userId) {

    }
}





