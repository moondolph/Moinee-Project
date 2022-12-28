package com.iljo.social_room.vo;

import lombok.Data;

@Data
public class RequestRoom {
    private String host;
    private String title;
    private String category;
    private String description;
    private String meeting_date;
    private String meeting_loc;
    private Integer limit_member;
    private String room_thumbnail;

}
