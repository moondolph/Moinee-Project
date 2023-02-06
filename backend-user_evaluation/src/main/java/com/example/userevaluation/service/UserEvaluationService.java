package com.example.userevaluation.service;

import com.example.userevaluation.dto.UserEvaluationDto;
import com.example.userevaluation.jpa.UserEvaluationEntity;

public interface UserEvaluationService {
    /**
     * user_evaluation을 생성하는 method
     * @param userEvaluationDto : Entity에 저장하기 위해서 사용되는 dto
     * */
    UserEvaluationDto createUserEvaluation(UserEvaluationDto userEvaluationDto);

    /**
     * user_evaluation을 userid를 통해서 특정 user의 평점 list를 가져오는 method
     * @param userId : 찾고 싶은 특정 user의 user_id
     * */
    Iterable<UserEvaluationEntity> getUserEvaluationByUserId(String userId);

    /**
     * user_evaluation을 userid를 통해서 평점 list를 가져오는 method
     * */
    Iterable<UserEvaluationEntity> getUserEvaluation();
    /**
     * user_evaluation의 평점을 수정하기 위해서 사용되는 method
     * @param userEvaluationDto : 바꿀 평점
     * */
    UserEvaluationDto     updateUserEvaluationByEvaluationId(Long evaluationId,
                                                             UserEvaluationDto userEvaluationDto);
                                            //Integer grade, String createAt );
          //                                            //UserEvaluationDto userEvaluationDto

    /**
     * user_evaluation의 평점을 삭제하기 위해서 사용되는 method
     *
     * @param evaluationId : 삭제하고 싶은 evaluation의 id
     * @return
     */
    String deleteUserEvaluationByEvaluationId(Long evaluationId);

}
