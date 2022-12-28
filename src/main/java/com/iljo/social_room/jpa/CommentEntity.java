package com.iljo.social_room.jpa;

import javax.persistence.*;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Data
@Entity
@Table(name="Comment")
@DynamicInsert
public class CommentEntity {

    /**
     * comment_id : 댓글 고유 번호
     * room_id : 댓글이 있는 방의 고유 번호
     * user_id : 댓글 작성자
     * content : 댓글 내용
     * date : 댓글 작성일
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long comment_id;

    @Column(nullable = false)
    private Long room_id;

    @Column(nullable = false)
    private String user_id;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    @ColumnDefault("sysdate")
    private String date;
}
