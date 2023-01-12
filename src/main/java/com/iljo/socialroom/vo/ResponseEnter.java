package com.iljo.socialroom.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseEnter {
    private String userId;

    private Long roomId;

}
