package com.iljo.userserver.jpa;

import com.iljo.userserver.dto.RoomTagID;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface User_Room_TagRepository extends CrudRepository<User_Room_TagEntity, RoomTagID> {

    List<User_Room_TagEntity> findAllByUserId(String userId);

}





