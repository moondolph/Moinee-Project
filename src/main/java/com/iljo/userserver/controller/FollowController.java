package com.iljo.userserver.controller;

import com.iljo.userserver.dto.FollowDto;
import com.iljo.userserver.dto.FollowID;
import com.iljo.userserver.service.FollowService;
import com.iljo.userserver.vo.RequestUserId;
import com.iljo.userserver.vo.ResponseFollow;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/")
    public ResponseEntity<String> deleteFollow(
            @PathVariable("userId") String userId,
            @RequestBody RequestUserId followUserId) {

        ModelMapper mapper = new ModelMapper();

        FollowID followID = mapper.map(followUserId, FollowID.class);
        followID.setUserId(userId);

        followService.deleteFollow(followID);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("deleted follow tag");
    }


}










