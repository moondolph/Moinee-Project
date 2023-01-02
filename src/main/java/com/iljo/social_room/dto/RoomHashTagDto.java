package com.iljo.social_room.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RoomHashTagDto {
    private Long roomId;
    private String hashTag;
};
