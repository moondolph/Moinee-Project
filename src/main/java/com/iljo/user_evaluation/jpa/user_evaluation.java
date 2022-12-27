package com.iljo.user_evaluation.jpa;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "user_evaluation")
public class user_evaluation implements Serializable {
    //직렬화 : 우리가 가지고 있는 object를 다른 네트워크에 전송하거나 db에 보관하기 위해서
    //마샬링(이란 한 객체의 메모리에서의 표현방식을 저장 또한 전송에 적합한 다른 데이터 형식으로 변환하는 과정입니다.)
    //언마샬링을 하기 위해서 사용한다.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 20, unique = true)
    private String user_id;

    @Column(nullable = false, length = 20)
    private String evaluator;

    @Column(nullable = false)
    private Integer grade;

    @Column(nullable = false, length = 10)
    private String createAt;
}
