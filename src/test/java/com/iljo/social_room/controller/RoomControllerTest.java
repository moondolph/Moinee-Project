package com.iljo.social_room.controller;

import com.iljo.social_room.dto.RoomDto;
import com.iljo.social_room.jpa.RoomEntity;
import com.iljo.social_room.service.RoomService;
import com.iljo.social_room.vo.RequestRoom;
import com.iljo.social_room.vo.ResponseRoom;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.provider.EnumSource;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.xml.transform.Result;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
class RoomControllerTest {

    @Autowired
    private RoomService roomService;


    @Test
    void createRoom() {
        Long roomId = 1L;
        String host = "gkesby" ;
        String title = "Donec semper sapien a libero.";
        String category = "번개모임";
        String content = "Integer non velit. Donec diam neque,";
        Date meetingDate = new Date();
        Date createDate = new Date();
        String meetingLoc = "충청남도 광주시 강남대0길";
        double latitude = 12.289736;
        double longitude = 10.3525964;
        Integer limitMember = 19;
        String roomThumbnail = "http://dummyimage.com/171x100.png/cc0000/ffffff";
        Integer roomLikes = null;

        RoomDto roomDto = new RoomDto(host, title, category, content, meetingDate, createDate, meetingLoc, latitude, longitude, limitMember, roomThumbnail);

        RoomEntity roomEntity = roomService.createRoom(roomDto);

        ModelMapper mapper = new ModelMapper();
        ResponseRoom responseRoom = mapper.map(roomDto, ResponseRoom.class);

        RoomEntity roomEntityExpected = new RoomEntity(roomId, host, title, category, content, meetingDate, createDate, meetingLoc, latitude, longitude, limitMember, roomThumbnail, roomLikes);



        assertEquals(roomEntityExpected.toString(), roomEntity.toString());

    }

}