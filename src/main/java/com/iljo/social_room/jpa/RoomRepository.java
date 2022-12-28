package com.iljo.social_room.jpa;

import org.springframework.data.repository.CrudRepository;



public interface RoomRepository extends CrudRepository<RoomEntity, Long> {
    Iterable<RoomEntity> findByCategory(String category);
    RoomEntity getRoomInfo(Long room_id);


}
