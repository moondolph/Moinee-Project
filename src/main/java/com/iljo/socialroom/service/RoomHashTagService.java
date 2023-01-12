package com.iljo.socialroom.service;

import com.iljo.socialroom.jpa.RoomHashTagEntity;
import com.iljo.socialroom.vo.RequestRoomHashTag;

import java.util.List;

public interface RoomHashTagService {

    //해시태그 등록
    Iterable<RoomHashTagEntity> createHashTag(List<RequestRoomHashTag> requestRoomHashTagList);

    //룸 ID로 해시태그 가져오기
    Iterable<RoomHashTagEntity> findByRoomId(Long roomId);

    //해시태그 삭제
    void deleteHashTag(List<RequestRoomHashTag> requestRoomHashTagList);




}
