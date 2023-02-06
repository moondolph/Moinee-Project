package com.iljo.userserver.jpa;

import javax.persistence.*;

import com.iljo.userserver.dto.RoomTagID;
import lombok.Data;
import java.io.Serializable;

/**
 * 유저가 관심을 가지는 소셜룸들의 목록을 저장하는 entity
 * */
@Data
@Entity
@Table(name = "userRoomTag")
@IdClass(RoomTagID.class)
public class User_Room_TagEntity implements Serializable{

    /**
     * 유저의 닉네임
     * */
    @Id
    @Column(nullable = false, length = 20)
    private String userId;

    /**
     * 유저가 관심을 가지는 방들의 id
     * */
    @Id
    @Column(nullable = false)
    private Long roomId;
}
