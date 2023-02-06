package com.iljo.socialroom.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class RoomHashTagId implements Serializable {

    private Long roomId;
    private String hashTag;

}
