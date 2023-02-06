package com.iljo.socialroom.jpa;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.List;

public interface RoomRepository extends CrudRepository<RoomEntity, Long> {
    ArrayList<RoomEntity> findAll();

    List<RoomEntity> findByCategory(String category);

}
