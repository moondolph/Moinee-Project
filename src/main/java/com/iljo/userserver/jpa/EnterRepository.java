package com.iljo.userserver.jpa;

import com.iljo.userserver.dto.EnterID;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface EnterRepository extends CrudRepository<EnterEntity, EnterID> {

    List<EnterEntity> findAllByUserId(String userId);
}





