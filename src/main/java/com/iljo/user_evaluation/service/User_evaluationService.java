package com.iljo.user_evaluation.service;

import com.iljo.user_evaluation.dto.User_evaluationDto;
import com.iljo.user_evaluation.jpa.User_evaluationEntity;

public interface User_evaluationService {
    /**
     * user_evaluation을 생성하는 method
     * @param user_evaluationDto : Entity에 저장하기 위해서 사용되는 dto
     * */
    User_evaluationDto createUser_evaluation(User_evaluationDto user_evaluationDto);

    /**
     * user_evaluation을 userid를 통해서 특정 user의 평점 list를 가져오는 method
     * @param user_id : 찾고 싶은 특정 user의 user_id
     * */
    Iterable<User_evaluationEntity> getUser_evaluationByUser_id(String user_id);

    /**
     * user_evaluation의 평점을 수정하기 위해서 사용되는 method
     * @param user_evaluationDto : Entity에 저장하기 위해서 사용되는 dto
     * */
    void updateUser_evaluationByEvaluation_id(User_evaluationDto user_evaluationDto);

    /**
     * user_evaluation의 평점을 삭제하기 위해서 사용되는 method
     * @param evaluation_id : 삭제하고 싶은 evaluation의 id
     * */
    void deleteUser_evaluationByEvaluation_id(Long evaluation_id);
}
