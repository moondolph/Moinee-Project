package com.iljo.userserver.jpa;

import javax.persistence.*;
import lombok.Data;
import java.io.Serializable;

@Data
@Entity
@Table(name = "enter")
public class EnterEntity implements Serializable{

    /**
     * 유저의 닉네임
     * */
    @Id
    @Column(nullable = false, length = 20)
    private String user_id;

    /**
     * 유저 참여하고 있는 방들의 id
     * */
    @Id
    @Column(nullable = false)
    private Long room_id;
}
