package com.example.userevaluation.jpa;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface UserEvaluationRepository extends JpaRepository<UserEvaluationEntity,Long> {

    UserEvaluationEntity findUserEvaluationEntityByEvaluationId(Long evaluationId);

    Iterable<UserEvaluationEntity> findUserEvaluationEntitiesByUserId(String userId, Sort sort);

    //@Modifying
    //@Query("update UserEvaluationEntity u set u.grade = :phone, u.createAt = :createAt where u.evaluationId = :evaluationId")
    //void updateUserEvaluation(@Param(value = "evaluationId") Long evaluationId, @Param(value = "grade") Integer grade, @Param(value = "createAt") String createAt);
}
