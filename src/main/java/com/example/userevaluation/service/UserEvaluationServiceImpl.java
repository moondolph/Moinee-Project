package com.example.userevaluation.service;

import com.example.userevaluation.dto.UserEvaluationDto;
import com.example.userevaluation.jpa.UserEvaluationEntity;
import com.example.userevaluation.jpa.UserEvaluationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Log4j
@RequiredArgsConstructor
public class UserEvaluationServiceImpl implements UserEvaluationService {

    UserEvaluationRepository userEvaluationRepository;
    EntityManager entityManager;
    @Autowired
    public UserEvaluationServiceImpl(UserEvaluationRepository userEvaluationRepository,
                                     EntityManager entityManager) {
        this.userEvaluationRepository = userEvaluationRepository;
        this.entityManager = entityManager;
    }

    private Sort sortByEvaluationId() {
        return Sort.by(Sort.Direction.DESC, "evaluationId");
    }

    /**
     * user_evaluation 생성 method
     * */
    @Override
    @Transactional
    public UserEvaluationDto createUserEvaluation(UserEvaluationDto userEvaluationDto) {

        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserEvaluationEntity userEvaluationEntity = mapper.map(userEvaluationDto, UserEvaluationEntity.class);
        userEvaluationRepository.save(userEvaluationEntity);
        UserEvaluationDto returnUserEvaluationDto = mapper.map(userEvaluationEntity, UserEvaluationDto.class);

        return returnUserEvaluationDto;
    }

    /**
     * User_Id에 대한 특정 값을 가져오는 method
     * */
    @Override
    public Iterable<UserEvaluationEntity> getUserEvaluationByUserId(String userId) {
        Sort sort = sortByEvaluationId();
        return userEvaluationRepository.findUserEvaluationEntitiesByUserId(userId, sort);
    }

    /**
     * User_Id에 대한 특정 값을 가져오는 method
     * */
    @Override
    public Iterable<UserEvaluationEntity> getUserEvaluation() {
        Sort sort = sortByEvaluationId();
        return userEvaluationRepository.findAll(sort);
    }

    /**
     * user_evaluation 생성 method
     * */
    @Override
    @Transactional
    public UserEvaluationDto  updateUserEvaluationByEvaluationId(Long evaluationId,
//                                                                 Integer grade, String createAt
                                                         UserEvaluationDto userEvaluationDto
    ) {
        Optional<UserEvaluationEntity> userEvaluation =
                userEvaluationRepository.findById(evaluationId);


        System.out.println(userEvaluationDto.getGrade());
        UserEvaluationEntity userEvaluationEntity = userEvaluation.get();


        userEvaluationEntity.setEvaluationId(userEvaluationDto.getEvaluationId());
        userEvaluationEntity.setUserId(userEvaluationDto.getUserId());
        userEvaluationEntity.setEvaluator(userEvaluationDto.getEvaluator());
        userEvaluationEntity.setGrade(userEvaluationEntity.getGrade());
        userEvaluationEntity.setCreateAt(userEvaluationDto.getCreateAt());

//        UserEvaluationEntity resultUserEvaluation
//                = userEvaluationRepository.saveAndFlush(userEvaluationEntity);

        entityManager.flush();
        entityManager.clear();

        UserEvaluationEntity resultUserEvaluation
                = userEvaluationRepository.findUserEvaluationEntityByEvaluationId(userEvaluationEntity.getEvaluationId());
        System.out.println(resultUserEvaluation.getEvaluationId());
        System.out.println(resultUserEvaluation.getGrade());

      //  userEvaluationRepository.updateUserEvaluation(evaluationId,grade,createAt);

        return new ModelMapper().map(resultUserEvaluation, UserEvaluationDto.class);
    }

    /**
     * user_evaluation 삭제
     *
     * @return
     */
    @Override
    public String deleteUserEvaluationByEvaluationId(Long evaluationId) {
        userEvaluationRepository.deleteById(evaluationId);

        if(userEvaluationRepository.findUserEvaluationEntityByEvaluationId(evaluationId) == null)
        return "삭제 성공";
        else return "삭제 실패";
    }
}
