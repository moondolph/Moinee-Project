package com.iljo.userserver.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseFavorite {
    private String userId;

    private String favorite;
}
