package com.iljo.userserver.controller;

import com.iljo.userserver.dto.FavoriteID;
import com.iljo.userserver.jpa.User_FavoriteEntity;
import com.iljo.userserver.service.FavoriteService;
import com.iljo.userserver.vo.ResponseFavorite;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/user/{userId}/user_favorite")
@CrossOrigin("http://localhost:3000")
public class FavoriteController {

    private FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    // favorite 테이블에 입력하는 메소드.
    // 문자열의 리스트를 받아온 뒤, dto인 FavoriteID에 맵핑해서 리스트를 만들어 서비스로 넘겨준다.
    @PostMapping("/")
    public ResponseEntity<String> addFavoriteList (
            @PathVariable("userId") String userId,
            @RequestBody List<String> favoriteList) {
        // 빈 ID 리스트 생성
        List<FavoriteID> favoriteIDList = new ArrayList<>();
        
        // 받아온 값을 ID리스트에 넣어준다.
        favoriteList.forEach(v -> {
            favoriteIDList.add(new FavoriteID(userId, v));
        });
        
        // sql 실행하기
        favoriteService.addFavorite(favoriteIDList);

        // 성공 메시지 출력
        return ResponseEntity.status(HttpStatus.OK).body("added favorites");
    }

    // 해당하는 ID에 해당하는 Favorite을 모두 불러오는 메소드.
    @GetMapping("/")
    public ResponseEntity<List<ResponseFavorite>> getFavoriteList (
            @PathVariable("userId") String userId) {
        // sql 문을 실행해서 저장된 값을 읽어온다.
        List<User_FavoriteEntity> userFavoriteEntityList = favoriteService.getFavoriteByUserId(userId);

        // 빈 VO리스트를 만든다.
        List<ResponseFavorite> result = new ArrayList<>();

        //지금 result는 Entity의 모양인 상태이므로 VO로 변환한다.
        userFavoriteEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseFavorite.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    // 입력받은 favorite을 삭제하는 메소드
    @DeleteMapping("/{user_favorite}")
    public ResponseEntity<String> deleteFavorite(
            @PathVariable("userId") String userId,
            @PathVariable("user_favorite") String favorite) {

        // URI를 통해 받아온 userID 와 favorite을 ID 객체에 담아준다.
        FavoriteID favoriteID = new FavoriteID(userId, favorite);

        // sql문 실행
        favoriteService.deleteFavorite(favoriteID);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("deleted the favorite");
    }


}










