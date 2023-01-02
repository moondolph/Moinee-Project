package com.iljo.userserver.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseRoomTag {

    private String userId;

    private Long roomId;
}
