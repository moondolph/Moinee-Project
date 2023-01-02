package com.iljo.userserver.controller;

import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.dto.FollowID;
import com.iljo.userserver.jpa.User_Follow_TagEntity;
import com.iljo.userserver.service.FollowService;
import com.iljo.userserver.vo.RequestUserId;
import com.iljo.userserver.vo.ResponseEnter;
import com.iljo.userserver.vo.ResponseFollow;
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
@RequestMapping("/user/{userId}/user_follow_tag")
public class FollowController {

    private FollowService followService;

    @Autowired
    public FollowController(FollowService followService) {
        this.followService = followService;
    }

    @PostMapping("/")
    public ResponseEntity<ResponseFollow> addFollow(
            @PathVariable("userId") String userId,
            @RequestBody RequestUserId followUserId
            ) {
        ModelMapper mapper = new ModelMapper();

        FollowDto followDto = mapper.map(followUserId, FollowDto.class);
        followDto.setUserId(userId);
        
        // sql 실행
        FollowDto followDto1 = followService.addFollow(followDto);

        ResponseFollow responseFollow = mapper.map(followDto1, ResponseFollow.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseFollow);
    }

    @GetMapping("/")
    public ResponseEntity<List<ResponseFollow>> getFollowList(
            @PathVariable("userId") String userId){
        List<User_Follow_TagEntity> userFollowTagEntityList = followService.getFollowByUserId(userId);

        List<ResponseFollow> result = new ArrayList<>();

        //지금 result는 Entity의 모양인 상태이므로 변환이 필수
       userFollowTagEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseFollow.class));
       });

        return ResponseEntity.status(HttpStatus.OK).body(result);

    }

    @DeleteMapping("/{user_follow_tag}")
    public ResponseEntity<String> deleteFollow(
            @PathVariable("userId") String userId,
            @PathVariable("user_follow_tag") String followUserId) {

        FollowID followID = new FollowID(userId, followUserId);

        followService.deleteFollow(followID);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("deleted follow tag");
    }


}










