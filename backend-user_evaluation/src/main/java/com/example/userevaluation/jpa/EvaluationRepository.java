package com.example.userevaluation.jpa;

import java.util.Optional;

public interface EvaluationRepository {
    Optional<UserEvaluationEntity> findByUserEvaluationId(Long evaluationId);
}
