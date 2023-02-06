package com.iljo.userserver.controller;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.EnterID;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.service.EnterService;
import com.iljo.userserver.vo.RequestRoomId;
import com.iljo.userserver.vo.ResponseEnter;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@Slf4j
@RequestMapping("/")
@CrossOrigin(origins = "*", exposedHeaders = "*")
public class EnterController {

    private EnterService enterService;

    @Autowired
    public EnterController(EnterService enterService) {
        this.enterService = enterService;
    }

    // 방에 참가하기를 눌렀을 때, enter 테이블에 데이터를 저장하는 메소드
    @PostMapping("/{userId}/enter/")
    public ResponseEntity<ResponseEnter> enterRoom(
            @PathVariable("userId") String userId,
            @RequestBody RequestRoomId roomId) {
        ModelMapper mapper = new ModelMapper();

        // dto에 받아온 값을 넣어준다.
        EnterDto enterDto = mapper.map(roomId, EnterDto.class);
        enterDto.setUserID(userId);

        // sql문 실행
        EnterDto enterDto1 = enterService.enterRoom(enterDto);

        // 입력에 성공한 값을 리턴한다.
        ResponseEnter responseEnter = mapper.map(enterDto1, ResponseEnter.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseEnter);
    }

    // 참여중인 방을 전부 불러오는 메소드
    @GetMapping("/{userId}/enter/")
    public ResponseEntity<List<ResponseEnter>> getEnterList (
            @PathVariable("userId") String userId) {
        // sql문 실행
        List<EnterEntity> enterEntityList = enterService.getEnterByUserId(userId);

        // 빈 List 생성
        List<ResponseEnter> result = new ArrayList<>();

        // List에 받아온 데이터를 맵핑해서 넣어준다.
        enterEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseEnter.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    // 방에 참여중인 user 리스트 받아오기
    @GetMapping("/enteredUser/{roomId}")
    public ResponseEntity<List<ResponseEnter>> getEnteredUserList(@PathVariable Long roomId) {
        List<EnterEntity> enterEntityList = enterService.getUserByRoomId(roomId);
        log.info("getUserByRoomID : " + enterEntityList);
        List<ResponseEnter> result = new ArrayList<>();

        enterEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseEnter.class));
        });
        log.info("ResponseEnter : " + result);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    // 참여했던 방에서 나갈 때, 데이터를 삭제하는 메소드
    @DeleteMapping("/{userId}/leave/{roomId}")
    public ResponseEntity<String> leaveTheRoom(
            @PathVariable("userId") String userId,
            @PathVariable("roomId") Long roomId) {
        // 받아온 값을 dto에 넣어준다.
        EnterID enterID = new EnterID(userId, roomId);

        // sql문 실행
        enterService.leaveTheRoom(enterID);

        // 확인 메시지 리턴
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("leaved the room");
    }

}










