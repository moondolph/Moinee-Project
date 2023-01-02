package com.iljo.social_room.jpa;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomHashTagRepository extends CrudRepository<RoomHashTagEntity, Long> {

    Iterable<RoomHashTagEntity> findRoomHashTagEntitiesByRoomId(Long roomId);

}
