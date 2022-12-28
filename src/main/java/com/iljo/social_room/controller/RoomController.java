package com.iljo.social_room.controller;

import com.iljo.social_room.dto.RoomDto;
import com.iljo.social_room.jpa.RoomEntity;
import com.iljo.social_room.sevice.RoomService;
import com.iljo.social_room.vo.RequestRoom;
import com.iljo.social_room.vo.ResponseRoom;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/social_room/")
public class RoomController {

    private RoomService roomService;

    @PostMapping("/")
    public ResponseEntity<ResponseRoom> createRoom(@RequestBody RequestRoom room) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        RoomDto roomDto = mapper.map(room, RoomDto.class);
        roomService.createRoom(roomDto);
        ResponseRoom responseRoom = mapper.map(roomDto, ResponseRoom.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseRoom);
    }

    @GetMapping("/")
    public ResponseEntity<List<ResponseRoom>> getAllRooms() {
        Iterable<RoomEntity> roomList = roomService.getRoomByAll();

        List<ResponseRoom> result = new ArrayList<>();
        roomList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseRoom.class));
        });
        return ResponseEntity.status(HttpStatus.OK).body(result);

    };

    @GetMapping("/{category}")
    public ResponseEntity<List<ResponseRoom>> getRoomByCategory(@PathVariable String category) {
        Iterable<RoomEntity> findByCategory = roomService.findByCategory(category);

        List<ResponseRoom> result = new ArrayList<>();
        findByCategory.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseRoom.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/{room_id}")
    public ResponseEntity<ResponseRoom> getRoomInfo(@PathVariable Long room_id) {
        RoomEntity roomEntity = roomService.getRoomInfo(room_id);
        ResponseRoom returnValue = new ModelMapper().map(roomEntity, ResponseRoom.class);

        return ResponseEntity.status(HttpStatus.OK).body(returnValue);

    }

//    @PutMapping("/{room_id}")
//    public ResponseEntity<ResponseRoom> updateRoomInfo(@PathVariable Long room_id, @RequestBody RequestRoom room) {
//
//
//
//    }

}






















