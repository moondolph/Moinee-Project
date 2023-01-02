package com.iljo.userserver.controller;

import com.iljo.userserver.dto.RoomTagDto;
import com.iljo.userserver.dto.RoomTagID;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.jpa.User_Room_TagEntity;
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

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/user/{userId}/user_room_tag")
public class RoomTagController {

    private RoomTagService roomTagService;

     @Autowired
    public RoomTagController(RoomTagService roomTagService) {
        this.roomTagService = roomTagService;
    }

    // 방에 좋아요를 누르기 위한 메소드
    @PostMapping("/")
    public ResponseEntity<ResponseRoomTag> addRoomTag(
            @PathVariable("userId") String userId,
            @RequestBody RequestRoomId roomId) {
        ModelMapper mapper = new ModelMapper();

        // uri에서 받아온 userId를 셋터로 넣어주고, requestBody에서 받아온 데이터를 맵퍼로 넣어준다.
        RoomTagDto roomTagDto = mapper.map(roomId, RoomTagDto.class);
        roomTagDto.setUserId(userId);

        // sql문 실행
        RoomTagDto roomTagDto1 = roomTagService.addRoomTag(roomTagDto);

        // 입력에 성공한 데이터를 반환한다.
        ResponseRoomTag responseRoomTag = mapper.map(roomTagDto1, ResponseRoomTag.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseRoomTag);
    }

    // 좋아요 누른 방을 전부 불러오는 메소드
    @GetMapping("/")
    public ResponseEntity<List<ResponseRoomTag>> getRoomTagList (
            @PathVariable("userId") String userId) {
         // sql문을 실행해서 userId에 해당하는 데이터를 모두 불러온다.
         List<User_Room_TagEntity> userRoomTagEntityList = roomTagService.getRoomTagByUserId(userId);

         // 데이터를 반환하기 위해 빈 List를 만든다.
        List<ResponseRoomTag> result = new ArrayList<>();

        // 받아온 Entity를 List에 넣어준다.
        userRoomTagEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseRoomTag.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    // 방에 누른 좋아요를 취소하는 메소드
    @DeleteMapping("/{user_room_tag}")
    public ResponseEntity<String> deleteRoomTag(
            @PathVariable("userId") String userId,
            @PathVariable("user_room_tag") Long roomId) {

         // uri로 받아온 userId와 roomTagId를 dto에 넣어준다.
         RoomTagID roomTagID = new RoomTagID(userId, roomId);

         // sql문 실행
        roomTagService.deleteRoomTag(roomTagID);

        // 삭제되었다는 String 메시지 리턴
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("deleted the roomTag");
    }

}










