package com.iljo.social_room.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;


@Data

public class ResponseRoom {

    private Long roomId;
    private String host;
    private String title;
    private String category;
    private String description;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private Date meetingDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private Date createDate;
    private String meetingLoc;
    private double latitude;
    private double longitude;
    private Integer limitMember;
    private String roomThumbnail;
    private Integer roomLikes;

//    private List<User> userList;
}
