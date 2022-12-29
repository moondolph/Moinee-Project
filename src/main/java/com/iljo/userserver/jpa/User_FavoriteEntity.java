package com.iljo.userserver.jpa;

import javax.persistence.*;
import lombok.Data;
import java.io.Serializable;

/**
 * 유저가 선호하는 분야의 목록을 저장하는 entity
 * */
@Data
@Entity
@Table(name = "user_favorite")
public class User_FavoriteEntity implements Serializable {

    /**
     * 유저의 닉네임
     * */
    @Id
    @Column(nullable = false, length = 20)
    private String userId;

    /**
     * 유저가 선호하는 분야
     * */
    @Id
    @Column(nullable = false, length = 20)
    private String favorite;
}
