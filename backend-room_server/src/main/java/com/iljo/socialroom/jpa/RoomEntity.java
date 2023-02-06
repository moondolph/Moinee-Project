package com.iljo.socialroom.jpa;

import javax.persistence.*;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;

import java.util.Date;


@Table(name="socialRoom")
@Entity
@Data
@DynamicInsert // Insert시 null값 제외하고 쿼리문 실행
public class RoomEntity {
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
    @Column
    private Long roomId;

    @Column(nullable = false, length = 20)
    private String host;

    @Column(nullable = false, length = 10)
    private String title;

    @Column(nullable = false, length = 10)
    private String category;

    @Column(nullable = false, columnDefinition = "Text", length = 50)
    private String description;

    @Column(nullable = false)
    private Date meetingDate;

    @Column(nullable = false)
    private Date createDate;

    @Column(nullable = false)
    private String meetingLoc;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;

    @Column(nullable = false, length = 2)
    private Integer limitMember;

    @Column(nullable = false)
    private String roomThumbnail;

    @Column(columnDefinition = "Integer default 0")
    private Integer roomLikes;


   public void putRoomInfo(RoomEntity roomEntity){
        if (roomEntity.roomId != null)
            this.roomId = roomEntity.roomId;
        if (roomEntity.host != null)
            this.host = roomEntity.host;
        if (roomEntity.title != null)
            this.title = roomEntity.title;
        if (roomEntity.category != null)
            this.category = roomEntity.category;
        if (roomEntity.description != null)
            this.description = roomEntity.description;
        if (roomEntity.meetingDate != null)
            this.meetingDate = roomEntity.meetingDate;
        if (roomEntity.createDate != null)
            this.createDate = roomEntity.createDate;
        if (roomEntity.meetingLoc != null)
            this.meetingLoc = roomEntity.meetingLoc;
        if (roomEntity.latitude != 0)
            this.latitude = roomEntity.latitude;
        if (roomEntity.longitude != 0)
            this.longitude = roomEntity.longitude;
        if (roomEntity.limitMember != null)
            this.limitMember = roomEntity.limitMember;
        if (roomEntity.roomThumbnail != null)
            this.roomThumbnail = roomEntity.roomThumbnail;
        if (roomEntity.roomLikes != null)
            this.roomLikes = roomEntity.roomLikes;

    }


























}
