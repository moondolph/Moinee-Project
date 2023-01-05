package com.iljo.social_room.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
public class RoomDto {

    private Long roomId;
    private String host;
    private String title;
    private String category;
    private String description;
    private Date meetingDate;
    private Date createDate;
    private String meetingLoc;
    private double latitude;
    private double longitude;
    private Integer limitMember;
    private String roomThumbnail;
    private Integer roomLikes;

}
