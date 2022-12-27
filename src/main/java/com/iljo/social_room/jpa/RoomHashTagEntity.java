package com.iljo.social_room.jpa;

import javax.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name="Room_Hash_Tag")
public class RoomHashTagEntity implements Serializable {
    @Id
    @Column(nullable = false)
    private Long room_id;

    @Id
    @Column(nullable = false, length = 20)
    private String hash_tag;
}
