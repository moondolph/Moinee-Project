package com.iljo.userserver.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * 회원정보를 얻을 때 방 정보를 보내주기 위해 만든 response
 * */
@Data
public class ResponseRoomId {

    private Long roomId;
    // 받아온 room 과 같은 column들 입력하기
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
}
