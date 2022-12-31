package com.iljo.userserver.controller;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.EnterID;
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

    @DeleteMapping("/")
    public ResponseEntity<String> leaveTheRoom(
            @PathVariable("userId") String userId,
            @RequestBody RequestRoomId roomId) {

        ModelMapper mapper = new ModelMapper();

        EnterID enterID = mapper.map(roomId, EnterID.class);
        enterID.setUserId(userId);

        enterService.leaveTheRoom(enterID);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("leaved the room");
    }

}










