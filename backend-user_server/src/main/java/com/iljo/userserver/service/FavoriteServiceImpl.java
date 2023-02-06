package com.iljo.userserver.service;

import com.iljo.userserver.dto.FavoriteID;
import com.iljo.userserver.jpa.UserFavoriteEntity;
import com.iljo.userserver.jpa.UserFavoriteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService{

    UserFavoriteRepository userFavoriteRepository;

    public FavoriteServiceImpl(UserFavoriteRepository userFavoriteRepository) {
        this.userFavoriteRepository = userFavoriteRepository;
    }



    @Override
    public void addFavorite(List<FavoriteID> favoriteIDList) {
        // dto로 받아온 ID 리스트를 엔티티에 담아주기 위해 빈 엔티티 리스트를 만든다.
        List<UserFavoriteEntity> favoriteEntityList = new ArrayList<>();

        // 받아온 dto의 값들을 맵핑해서 entity에 담아준다.
        favoriteIDList.forEach(v -> {
            favoriteEntityList.add(new ModelMapper().map(v, UserFavoriteEntity.class));
        });

        // saveAll 메소드를 이용해 DB에 저장하기
        userFavoriteRepository.saveAll(favoriteEntityList);

    }

    @Override
    public List<UserFavoriteEntity> getFavoriteByUserId(String userId) {
        // 입력한 아이디에 해당하는 데이터를 모두 받아와서 리스트에 담는다.
        List<UserFavoriteEntity> userFavoriteEntityList = userFavoriteRepository.findAllByUserId(userId);

        return userFavoriteEntityList;
    }
    // 입력한 favorite에 해당하는 데이터 하나를 지운다.
    @Override
    public void deleteFavorite(FavoriteID favoriteID) {

        userFavoriteRepository.deleteById(favoriteID);
    }
}





