package com.iljo.userserver.controller;

import com.iljo.userserver.dto.RoomTagDto;
import com.iljo.userserver.dto.RoomTagID;
import com.iljo.userserver.service.RoomTagService;
import com.iljo.userserver.vo.RequestRoomId;
import com.iljo.userserver.vo.ResponseEnter;
import com.iljo.userserver.vo.ResponseRoomTag;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user/{userId}/user_room_tag")
public class RoomTagController {

    private RoomTagService roomTagService;

     @Autowired
    public RoomTagController(RoomTagService roomTagService) {
        this.roomTagService = roomTagService;
    }

    @PostMapping("/")
    public ResponseEntity<ResponseRoomTag> addRoomTag(
            @PathVariable("userId") String userId,
            @RequestBody RequestRoomId roomId) {
        ModelMapper mapper = new ModelMapper();

        RoomTagDto roomTagDto = mapper.map(roomId, RoomTagDto.class);
        roomTagDto.setUserId(userId);

        RoomTagDto roomTagDto1 = roomTagService.addRoomTag(roomTagDto);

        ResponseRoomTag responseRoomTag = mapper.map(roomTagDto1, ResponseRoomTag.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseRoomTag);
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deleteRoomTag(
            @PathVariable("userId") String userId,
            @RequestBody RequestRoomId roomId) {

        ModelMapper mapper = new ModelMapper();

        RoomTagID roomTagID = mapper.map(roomId, RoomTagID.class);
        roomTagID.setUserId(userId);

        roomTagService.deleteRoomTag(roomTagID);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("deleted the roomTag");
    }

}










