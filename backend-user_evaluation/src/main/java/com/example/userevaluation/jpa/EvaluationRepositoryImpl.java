package com.example.userevaluation.jpa;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class EvaluationRepositoryImpl implements EvaluationRepository {

    private final EntityManager entityManager;


    @Override
    public Optional<UserEvaluationEntity> findByUserEvaluationId(Long evaluationId) {
        return Optional.empty();
    }
}
