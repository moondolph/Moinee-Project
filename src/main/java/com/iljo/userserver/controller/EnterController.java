package com.iljo.userserver.controller;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.EnterID;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.service.EnterService;
import com.iljo.userserver.vo.RequestRoomId;
import com.iljo.userserver.vo.ResponseEnter;
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
@RequestMapping("/user/{userId}/enter")
public class EnterController {

    private EnterService enterService;

    @Autowired
    public EnterController(EnterService enterService) {
        this.enterService = enterService;
    }

    @PostMapping("/")
    public ResponseEntity<ResponseEnter> enterRoom(
            @PathVariable("userId") String userId,
            @RequestBody RequestRoomId roomId) {
        ModelMapper mapper = new ModelMapper();

        EnterDto enterDto = mapper.map(roomId, EnterDto.class);
        enterDto.setUserID(userId);

        EnterDto enterDto1 = enterService.enterRoom(enterDto);

        ResponseEnter responseEnter = mapper.map(enterDto1, ResponseEnter.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseEnter);
    }

    @GetMapping("/")
    public ResponseEntity<List<ResponseEnter>> getEnterList (
            @PathVariable("userId") String userId) {
        List<EnterEntity> enterEntityList = enterService.getEnterByUserId(userId);

        List<ResponseEnter> result = new ArrayList<>();

        //지금 result는 Entity의 모양인 상태이므로 변환이 필수
        enterEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseEnter.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }


    @DeleteMapping("/{room_id}")
    public ResponseEntity<String> leaveTheRoom(
            @PathVariable("userId") String userId,
            @PathVariable("room_id") Long roomId) {

        EnterID enterID = new EnterID(userId, roomId);

        enterService.leaveTheRoom(enterID);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("leaved the room");
    }

}










