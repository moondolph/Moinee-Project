package com.iljo.social_room.jpa;

import com.iljo.social_room.dto.RoomHashTagId;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomHashTagRepository extends CrudRepository<RoomHashTagEntity, RoomHashTagId> {

    Iterable<RoomHashTagEntity> findRoomHashTagEntitiesByRoomId(Long roomId);

}
