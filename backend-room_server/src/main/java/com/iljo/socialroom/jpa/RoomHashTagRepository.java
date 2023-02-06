package com.iljo.socialroom.jpa;

import com.iljo.socialroom.dto.RoomHashTagId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomHashTagRepository extends CrudRepository<RoomHashTagEntity, RoomHashTagId> {

    Iterable<RoomHashTagEntity> findRoomHashTagEntitiesByRoomId(Long roomId);

}
