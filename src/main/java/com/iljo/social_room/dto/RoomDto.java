package com.iljo.social_room.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomDto {

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
