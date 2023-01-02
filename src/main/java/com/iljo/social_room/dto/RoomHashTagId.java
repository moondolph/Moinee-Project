package com.iljo.social_room.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class RoomHashTagId implements Serializable {

    private String roomId;
    private String hashTag;

}
