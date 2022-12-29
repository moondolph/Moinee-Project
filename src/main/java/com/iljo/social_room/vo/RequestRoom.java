package com.iljo.social_room.vo;

import lombok.Data;
@Data
public class RequestRoom {

    private Long roomId;
    private String host;
    private String title;
    private String category;
    private String description;
    private String meetingDate;
    private String createDate;
    private String meetingLoc;
    private double latitude;
    private double longitude;
    private Integer limitMember;
    private String roomThumbnail;
    private Integer roomLikes;


}
