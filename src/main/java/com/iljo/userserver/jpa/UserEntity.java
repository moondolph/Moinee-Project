package com.iljo.userserver.jpa;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 *  서비스를 이용하는 유저에 대한 entity
 * */
@Data
@Entity
@Table(name = "users")
public class UserEntity implements Serializable {

    /**
     * 유저의 닉네임이자 primary key
     * */
    @Id
    @Column(nullable = false, length = 20)
    private String userId;

    @Column(nullable = false)
    private String encryptedPwd;

    @Column(nullable = false, length = 6)
    private String name;

    @Column(nullable = false, length = 10)
    private String birthday;

    @Column(nullable = false, length = 50, unique = true)
    private String email;

    @Column(nullable = false, length = 1)
    private String gender;

    /**
     * 유저의 주소
     * */
    @Column(nullable = false)
    private String address;

    /**
     * 유저의 위도
     * */
    @Column(nullable = false)
    private Double latitude;

    /**
     * 유저의 경도
     * */
    @Column(nullable = false)
    private Double longitude;

    /**
     * 유저의 프로필사진
     * */
    @Column(nullable = false)
    private String thumbnail;



}
