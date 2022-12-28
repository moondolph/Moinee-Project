package com.iljo.social_room.dto;

import lombok.Data;

@Data
public class RoomDto {

    private String host;
    private String title;
    private String category;
    private String description;
    private String meeting_date;
    private String create_date;
    private String meeting_loc;
    private double latitude;
    private double longitude;
    private Integer limit_member;
    private String room_thumbnail;
    private Integer room_likes;


}
