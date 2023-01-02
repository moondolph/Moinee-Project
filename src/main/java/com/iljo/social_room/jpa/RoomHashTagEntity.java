package com.iljo.social_room.jpa;

import javax.persistence.*;

import com.iljo.social_room.dto.RoomHashTagId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import java.io.Serializable;


@DynamicInsert // Insert시 null값 제외하고 쿼리문 실행
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="RoomHashTag")
@IdClass(RoomHashTagId.class)
public class RoomHashTagEntity implements Serializable {
    @Id
    @Column(nullable = false)
    private Long roomId;

    @Id
    @Column(nullable = false, length = 20)
    private String hashTag;
}
