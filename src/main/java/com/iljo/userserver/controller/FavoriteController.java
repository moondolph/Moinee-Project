package com.iljo.userserver.controller;

import com.iljo.userserver.dto.EnterID;
import com.iljo.userserver.dto.FavoriteID;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.jpa.User_FavoriteEntity;
import com.iljo.userserver.service.FavoriteService;
import com.iljo.userserver.vo.RequestRoomId;
import com.iljo.userserver.vo.ResponseEnter;
import com.iljo.userserver.vo.ResponseFavorite;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/user/{userId}/user_favorite")
public class FavoriteController {

    private FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @GetMapping("/")
    public ResponseEntity<List<ResponseFavorite>> getFavoriteList (
            @PathVariable("userId") String userId) {
        List<User_FavoriteEntity> userFavoriteEntityList = favoriteService.getFavoriteByUserId(userId);

        List<ResponseFavorite> result = new ArrayList<>();

        //지금 result는 Entity의 모양인 상태이므로 변환이 필수
        userFavoriteEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseFavorite.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @DeleteMapping("/{user_favorite}")
    public ResponseEntity<String> deleteFavorite(
            @PathVariable("userId") String userId,
            @PathVariable("user_favorite") String favorite) {

        FavoriteID favoriteID = new FavoriteID(userId, favorite);

        favoriteService.deleteFavorite(favoriteID);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("leaved the room");
    }


}










