package com.iljo.social_room.jpa;

import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.List;


public interface RoomRepository extends CrudRepository<RoomEntity, Long> {
    @Override
    ArrayList<RoomEntity> findAll();

    List<RoomEntity> findByCategory(String category);

}
