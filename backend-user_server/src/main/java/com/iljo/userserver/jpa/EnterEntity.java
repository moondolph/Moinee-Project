package com.iljo.userserver.jpa;

import javax.persistence.*;

import com.iljo.userserver.dto.EnterID;
import lombok.Data;
import java.io.Serializable;

@Data
@Entity
@Table(name = "enter")
@IdClass(EnterID.class)
public class EnterEntity implements Serializable{

    /**
     * 유저의 닉네임
     * */
    @Id
    @Column(nullable = false, length = 20)
    private String userId;

    /**
     * 유저 참여하고 있는 방들의 id
     * */
    @Id
    @Column(nullable = false)
    private Long roomId;
}
