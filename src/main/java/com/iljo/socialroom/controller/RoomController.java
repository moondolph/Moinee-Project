package com.iljo.socialroom.controller;

import com.iljo.socialroom.dto.RoomDto;
import com.iljo.socialroom.dto.RoomHashTagDto;
import com.iljo.socialroom.feign.UserClient;
import com.iljo.socialroom.jpa.RoomEntity;
import com.iljo.socialroom.jpa.RoomHashTagEntity;
import com.iljo.socialroom.service.RoomHashTagService;
import com.iljo.socialroom.service.RoomService;
import com.iljo.socialroom.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/socialRoom")
@Slf4j
@CrossOrigin("http://localhost:3000")
public class RoomController {


    private RoomService roomService;
    private RoomHashTagService roomHashTagService;
    private UserClient userClient;

    @Autowired
    public RoomController(RoomService roomService, RoomHashTagService roomHashTagService, UserClient userClient) {
        this.roomService = roomService;
        this.roomHashTagService = roomHashTagService;
        this.userClient = userClient;
    }

    /**
     *  Social_Room Create Method
     */
    @PostMapping("/")
    @Transactional
    public ResponseEntity<ResponseRoom> createRoom(@RequestBody RequestRoom room) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        RoomDto roomDto = mapper.map(room, RoomDto.class);
        RoomEntity roomEntity = roomService.createRoom(roomDto);
        ResponseRoom responseRoom = mapper.map(roomEntity, ResponseRoom.class);
        return (responseRoom != null) ? ResponseEntity.status(HttpStatus.CREATED).body(responseRoom) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    /**
     * Social_Room File Upload
     */
    @PostMapping("/upload")
    public ResponseEntity upload(@RequestPart MultipartFile file) {
        String fileName = roomService.uploadFile(file);

        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(fileName);
        } catch (Exception e) {
            log.error(e.toString());
            return null;
        }
    }

    /**
     * Find All Social_Room List Method
     */
    @GetMapping("/")
    public ResponseEntity<List<ResponseRoom>> getAllRooms() {
        List<RoomEntity> rooms = roomService.getRoomByAll();

        List<ResponseRoom> roomList = new ArrayList<>();
        rooms.forEach(v -> {
            roomList.add(new ModelMapper().map(v, ResponseRoom.class));
        });
        return ResponseEntity.status(HttpStatus.OK).body(roomList);


    };

    /**
     * Find Room_Info by Room_ID Method
     */
    @GetMapping("/{roomId}")
    public ResponseEntity<ResponseRoom> getRoomInfo(@PathVariable Long roomId) {
        // Enter에서 UserId 가져오기
        List<ResponseEnter> responseEnters = userClient.getEnteredUser(roomId);
        List<ResponseUser> userList = new ArrayList<>();
        responseEnters.forEach(u -> {
            ResponseUser users = userClient.getUsers(u.getUserId());
            userList.add(users);
        });
        // RoomHashTag 가져오기
        Iterable<RoomHashTagEntity> roomHashTagEntity = roomHashTagService.findByRoomId(roomId);
        List<ResponseRoomHashTag> responseRoomHashTag = new ArrayList<>();
        roomHashTagEntity.forEach(v -> {
            responseRoomHashTag.add(new ModelMapper().map(v, ResponseRoomHashTag.class));
        });

        // 방 정보 가져오기
        RoomEntity roomEntity = roomService.getRoomInfo(roomId);
        ResponseRoom roomInfo = new ModelMapper().map(roomEntity, ResponseRoom.class);
        roomInfo.setUserList(userList);
        roomInfo.setRoomHashTagList(responseRoomHashTag);
        return ResponseEntity.status(HttpStatus.OK).body(roomInfo);
    }

    // user에 보내줄 room 정보
    @GetMapping("/{roomId}/user")
    public ResponseEntity<ResponseRoom> getRoomInfoForUser(@PathVariable Long roomId) {
        RoomEntity roomEntity = roomService.getRoomInfo(roomId);
        ResponseRoom roomInfo = new ModelMapper().map(roomEntity, ResponseRoom.class);
        return ResponseEntity.status(HttpStatus.OK).body(roomInfo);
    }

    /**
     *  Find Social_Room by category Method
     */
    @GetMapping("/{category}/")
    public ResponseEntity<List<ResponseRoom>> getRoomByCategory(@PathVariable String category) {
        List<RoomEntity> findByCategory = roomService.findByCategory(category);

        List<ResponseRoom> roomList = new ArrayList<>();
        findByCategory.forEach(v -> {
            roomList.add(new ModelMapper().map(v, ResponseRoom.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(roomList);
    }


    /**
     * Update Room_Info Method
     */
    @PutMapping("/{roomId}")
    @Transactional
    public ResponseEntity<ResponseRoom> updateRoomInfo(@PathVariable Long roomId, @RequestBody RequestRoom room) {
        ModelMapper mapper = new ModelMapper();
        RoomDto roomDto = mapper.map(room, RoomDto.class);
        RoomEntity roomEntity = roomService.updateRoomInfo(roomId, roomDto);
        ResponseRoom updatedRoom = new ModelMapper().map(roomEntity, ResponseRoom.class);
        return (updatedRoom != null) ? ResponseEntity.status(HttpStatus.OK).body(updatedRoom) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    /**
     * Delete Social_Room Method
     */
    @DeleteMapping("/{roomId}")
    @Transactional
    public ResponseEntity<String> deleteRoom(@PathVariable Long roomId){
        RoomEntity deleteRoom = roomService.deleteRoom(roomId);
        return (deleteRoom != null) ? ResponseEntity.status(HttpStatus.ACCEPTED).body("삭제성공") :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //해시태그 저장하기
    @PostMapping("/{roomId}/hashTag")
    @Transactional
    public ResponseEntity<List<ResponseRoomHashTag>> createHashTag(@PathVariable Long roomId, @RequestBody List<RequestRoomHashTag> requestRoomHashTagList) {
//        ModelMapper mapper = new ModelMapper();
//        RoomHashTagId roomHashTagId = mapper.map(hashTag,RoomHashTagId.class);
//        roomHashTagId.setRoomId(roomId);
        Iterable<RoomHashTagEntity> roomHashTagEntityList = roomHashTagService.createHashTag(requestRoomHashTagList);

        List<ResponseRoomHashTag> responseRoomHashTagList = new ArrayList<>();
        roomHashTagEntityList.forEach(v -> {
            responseRoomHashTagList.add(new ModelMapper().map(v, ResponseRoomHashTag.class));
        });

        return (responseRoomHashTagList != null) ? ResponseEntity.status(HttpStatus.CREATED).body(responseRoomHashTagList) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }


    // 해시태그 값 읽어오기
    @GetMapping("/{roomId}/hashTag")
    public ResponseEntity<List<ResponseRoomHashTag>> getHashTag(@PathVariable Long roomId){
        Iterable<RoomHashTagEntity> responseRoomHashTags = roomHashTagService.findByRoomId(roomId);
        List<ResponseRoomHashTag> responseRoomHashTagList = new ArrayList<>();

        responseRoomHashTags.forEach(v -> {
            responseRoomHashTagList.add(new ModelMapper().map(v, ResponseRoomHashTag.class));
        });


        return (responseRoomHashTagList != null) ? ResponseEntity.status(HttpStatus.OK).body(responseRoomHashTagList) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // 해시태그 삭제 하기
    @DeleteMapping("/{roomId}/hashTag")
    @Transactional
    public ResponseEntity<List<ResponseRoomHashTag>> deleteHashTag(@RequestBody List<RequestRoomHashTag> requestRoomHashTagList, @PathVariable Long roomId){

        roomHashTagService.deleteHashTag(requestRoomHashTagList);

        Iterable<RoomHashTagEntity> responseRoomHashTags =
                roomHashTagService.findByRoomId(roomId);

        List<ResponseRoomHashTag> responseRoomHashTagList = new ArrayList<>();

        responseRoomHashTags.forEach(v -> {
            responseRoomHashTagList.add(new ModelMapper().map(v, ResponseRoomHashTag.class));
        });
        return ResponseEntity.status(HttpStatus.OK).body(responseRoomHashTagList);
    }




}






















