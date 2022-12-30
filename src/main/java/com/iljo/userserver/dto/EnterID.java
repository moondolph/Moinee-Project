package com.iljo.userserver.dto;

import lombok.NoArgsConstructor;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

// 복합키를 가지는 테이블을 처리하기 위한 식별자 클래스입니다.
// (참고 : https://jforj.tistory.com/84 )
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EnterID implements Serializable {

    private String userId;
    private Long roomId;

}
