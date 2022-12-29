package com.iljo.social_room.controller;

import com.iljo.social_room.dto.RoomDto;
import com.iljo.social_room.jpa.RoomEntity;
import com.iljo.social_room.service.RoomService;
import com.iljo.social_room.vo.RequestRoom;
import com.iljo.social_room.vo.ResponseRoom;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/social_room")
@Slf4j
public class RoomController {


    private RoomService roomService;
    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    /**
     *  Social_Room Create Method
     */
    @PostMapping("/")
    public ResponseEntity<ResponseRoom> createRoom(@RequestBody RequestRoom room) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        RoomDto roomDto = mapper.map(room, RoomDto.class);
        roomService.createRoom(roomDto);
        ResponseRoom responseRoom = mapper.map(roomDto, ResponseRoom.class);
        return (responseRoom != null) ? ResponseEntity.status(HttpStatus.CREATED).body(responseRoom) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
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
        RoomDto roomDto = roomService.getRoomInfo(roomId);
        log.info(roomDto.toString());
        ResponseRoom roomInfo = new ModelMapper().map(roomDto, ResponseRoom.class);
        log.info(roomInfo.getRoomId().toString());
        return ResponseEntity.status(HttpStatus.OK).body(roomInfo); // user list 추가

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
    public ResponseEntity<String> deleteRoom(@PathVariable Long roomId){
        RoomEntity deleteRoom = roomService.deleteRoom(roomId);
        return (deleteRoom != null) ? ResponseEntity.status(HttpStatus.ACCEPTED).body("삭제성공") :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}






















