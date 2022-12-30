package com.iljo.userserver.jpa;

import org.springframework.data.repository.CrudRepository;

import com.iljo.userserver.dto.EnterDto;
import com.iljo.userserver.dto.EnterID;

public interface EnterRepository extends CrudRepository<EnterEntity, EnterID> {



}





