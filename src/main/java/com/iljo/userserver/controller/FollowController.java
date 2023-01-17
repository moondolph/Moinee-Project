package com.iljo.userserver.controller;

import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.dto.FollowID;
import com.iljo.userserver.jpa.UserFollowTagEntity;
import com.iljo.userserver.service.FollowService;
import com.iljo.userserver.vo.RequestUserId;
import com.iljo.userserver.vo.ResponseFollow;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/{userId}/user_follow_tag")
@CrossOrigin(origins = "*")
public class FollowController {

    private FollowService followService;

    @Autowired
    public FollowController(FollowService followService) {
        this.followService = followService;
    }

    // 유저 팔로우하기를 눌렀을 때 User_Follow_Tag 에 데이터를 추가하는 메소드
    @PostMapping("/")
    public ResponseEntity<ResponseFollow> addFollow(
            @PathVariable("userId") String userId,
            @RequestBody RequestUserId followUserId
            ) {
        ModelMapper mapper = new ModelMapper();

        // dto에 받아온 값들을 넣어준다.
        FollowDto followDto = mapper.map(followUserId, FollowDto.class);
        followDto.setUserId(userId);
        
        // sql 실행
        FollowDto followDto1 = followService.addFollow(followDto);

        // 입력에 성공한 데이터를 반환한다.
        ResponseFollow responseFollow = mapper.map(followDto1, ResponseFollow.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseFollow);
    }

    // ID에 해당하는 followUserId 를 불러오는 메소드
    @GetMapping("/")
    public ResponseEntity<List<ResponseFollow>> getFollowList(
            @PathVariable("userId") String userId){
        // sql문을 실행하여 ID에 해당하는 데이터들을 불러온다.
        List<UserFollowTagEntity> userFollowTagEntityList = followService.getFollowByUserId(userId);

        // 반환하기 위해 비어있는 List 생성
        List<ResponseFollow> result = new ArrayList<>();

        // 불러온 데이터들을 List에 담아준다.
       userFollowTagEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseFollow.class));
       });

        return ResponseEntity.status(HttpStatus.OK).body(result);

    }

    // 유저 팔로우를 취소하기 위한 메소드
    @DeleteMapping("/{user_follow_tag}")
    public ResponseEntity<String> deleteFollow(
            @PathVariable("userId") String userId,
            @PathVariable("user_follow_tag") String followUserId) {

        // 특정 값을 지정하기 위해 ID 객체를 사용한다.
        FollowID followID = new FollowID(userId, followUserId);

        // sql문 실행
        followService.deleteFollow(followID);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("deleted follow tag");
    }


}










