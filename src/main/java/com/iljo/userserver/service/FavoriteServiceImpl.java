package com.iljo.userserver.service;

import com.iljo.userserver.dto.FavoriteDto;
import com.iljo.userserver.dto.FavoriteID;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.jpa.User_FavoriteEntity;
import com.iljo.userserver.jpa.UserRepository;
import com.iljo.userserver.jpa.User_FavoriteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService{

    User_FavoriteRepository user_FavoriteRepository;

    public FavoriteServiceImpl(User_FavoriteRepository user_FavoriteRepository) {
        this.user_FavoriteRepository = user_FavoriteRepository;
    }



    @Override
    public void addFavorite(List<FavoriteID> favoriteIDList) {
        // dto로 받아온 ID 리스트를 엔티티에 담아주기 위해 빈 엔티티 리스트를 만든다.
        List<User_FavoriteEntity> favoriteEntityList = new ArrayList<>();

        // 받아온 dto의 값들을 맵핑해서 entity에 담아준다.
        favoriteIDList.forEach(v -> {
            favoriteEntityList.add(new ModelMapper().map(v, User_FavoriteEntity.class));
        });

        // saveAll 메소드를 이용해 DB에 저장하기
        user_FavoriteRepository.saveAll(favoriteEntityList);

    }

    @Override
    public List<User_FavoriteEntity> getFavoriteByUserId(String userId) {

        List<User_FavoriteEntity> userFavoriteEntityList = user_FavoriteRepository.findAllByUserId(userId);

        return userFavoriteEntityList;
    }

    @Override
    public void deleteFavorite(FavoriteID favoriteID) {
        user_FavoriteRepository.deleteById(favoriteID);
    }
}





