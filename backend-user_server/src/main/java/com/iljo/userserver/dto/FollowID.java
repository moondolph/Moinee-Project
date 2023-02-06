package com.iljo.userserver.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

// 복합키를 가지는 테이블을 처리하기 위한 식별자 클래스입니다.
// (참고 : https://jforj.tistory.com/84 )
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FollowID implements Serializable {

    private String userId;
    private String followUserId;

}
