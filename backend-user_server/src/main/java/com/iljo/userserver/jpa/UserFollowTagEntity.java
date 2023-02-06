package com.iljo.userserver.jpa;

import javax.persistence.*;

import com.iljo.userserver.dto.FollowID;
import lombok.Data;
import java.io.Serializable;

/**
 * 유저가 관심을 가지는 다른 유저들의 목록을 저장하는 entity
 * */
@Data
@Entity
@Table(name = "userFollowTag")
@IdClass(FollowID.class)
public class UserFollowTagEntity implements Serializable{

    /**
     * 유저의 닉네임
     * */
    @Id
    @Column(nullable = false, length = 20)
    private String userId;

    /**
     * 유저가 관심을 가지는 유저들의 닉네임
     * */
    @Id
    @Column(nullable = false, length = 20)
    private String followUserId;
}
