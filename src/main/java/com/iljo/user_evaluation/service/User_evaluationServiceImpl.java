package com.iljo.user_evaluation.service;

import com.iljo.user_evaluation.dto.User_evaluationDto;
import com.iljo.user_evaluation.jpa.User_evaluationEntity;

public class User_evaluationServiceImpl implements User_evaluationService{
    @Override
    public User_evaluationDto createUser_evaluation(User_evaluationDto user_evaluationDto) {
        return null;
    }

    @Override
    public Iterable<User_evaluationEntity> getUser_evaluationByUser_id(String user_id) {
        return null;
    }

    @Override
    public void updateUser_evaluationByEvaluation_id(User_evaluationDto user_evaluationDto) {

    }

    @Override
    public void deleteUser_evaluationByEvaluation_id(Long evaluation_id) {

    }
}
