package com.iljo.social_room.service;

import com.iljo.social_room.dto.RoomHashTagDto;
import com.iljo.social_room.jpa.RoomHashTagEntity;
import com.iljo.social_room.vo.RequestRoomHashTag;

import java.util.List;

public interface RoomHashTagService {

    //해시태그 등록
    RoomHashTagEntity createHashTag(RoomHashTagDto roomHashTagDto);

    //룸 ID로 해시태그 가져오기
    Iterable<RoomHashTagEntity> findByHashTag(Long roomId);

    //해시태그 삭제
    void deleteHashTag(List<RequestRoomHashTag> requestRoomHashTagList);




}
