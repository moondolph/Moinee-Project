package com.iljo.social_room.jpa;

import javax.persistence.*;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import java.io.Serializable;

@Data
@Entity
@Table(name = "Social_Room")
@DynamicInsert // Insert시 null값 제외하고 쿼리문 실행

public class RoomEntity implements Serializable{
    /**
     * room_id :  고유 방 번호
     * host : 방 제작자
     * title : 방 제목
     * category : 방 분류 카테고리
     * description : 방 세부내용
     * meeting_date : 모임일자
     * create_date : 방 생성일자
     * meeting_loc : 모임 장소
     * latitude : 위도
     * longitude : 경도
     * limit_member : 제한 인원 (4 ~ 20)
     * room_thumbnail : 방 이미지
     * room_likes : 방 좋아요
     * */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name="room_id")
    private Long roomid;

    @Id
    @Column(nullable = false, length = 20)
    private String host;

    @Column(nullable = false, length = 50)
    private String title;

    @Column(nullable = false, length = 10)
    private String category;

    @Column(nullable = false, columnDefinition = "Text")
    private String description;

    @Column(nullable = false, length = 10, name="meeting_date")
    private String meetingdate;

    @Column(nullable = false, length = 10, name="create_date")
    private String createdate;

    @Column(nullable = false, name="meeting_loc")
    private String meetingloc;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;

    @Column(nullable = false, length = 2, name="limit_member")
    private Integer limitmember;

    @Column(nullable = false, name="room_thumbnail")
    private String roomthumbnail;

    @Column(name="room_likes")
    @ColumnDefault("0")
    private Integer roomlikes;



}
