package com.example.userevaluation.controller;


import com.example.userevaluation.dto.UserEvaluationDto;
import com.example.userevaluation.jpa.UserEvaluationEntity;
import com.example.userevaluation.service.UserEvaluationService;
import com.example.userevaluation.vo.RequestUserEvaluation;
import com.example.userevaluation.vo.ResponseUserEvaluation;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
//@RequestMapping("/user-evaluation/")
public class UserEvaluationController {

    UserEvaluationService userEvaluationService;

    ModelMapper mapper = new ModelMapper();

    @Autowired
    public UserEvaluationController(UserEvaluationService userEvaluationService) {
        this.userEvaluationService = userEvaluationService;
    }

    @PostMapping("/")
    public ResponseEntity<ResponseUserEvaluation> createUserEvaluation(@RequestBody RequestUserEvaluation req){
        ModelMapper mapper = new ModelMapper();

        UserEvaluationDto userEvaluationDto = userEvaluationService.createUserEvaluation(
                mapper.map(req, UserEvaluationDto.class));
        ResponseUserEvaluation returnValue = mapper.map(userEvaluationDto, ResponseUserEvaluation.class);
        return ResponseEntity.status(HttpStatus.CREATED).body(returnValue);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<ResponseUserEvaluation>> getUserEvaluations(@PathVariable String userId){
        Iterable<UserEvaluationEntity> userEvaluationEntity = userEvaluationService.getUserEvaluationByUserId(userId);


        List<ResponseUserEvaluation> responseUserEvaluations = new ArrayList<>();

        userEvaluationEntity.forEach( evaluation -> {
            responseUserEvaluations.add(mapper.map(evaluation, ResponseUserEvaluation.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(responseUserEvaluations);
    }

    @GetMapping("/")
    public ResponseEntity<List<ResponseUserEvaluation>> getUserEvaluations(){
        Iterable<UserEvaluationEntity> userEvaluationEntity = userEvaluationService.getUserEvaluation();

        List<ResponseUserEvaluation> responseUserEvaluations = new ArrayList<>();

        userEvaluationEntity.forEach( evaluation -> {
            responseUserEvaluations.add(mapper.map(evaluation, ResponseUserEvaluation.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(responseUserEvaluations);
    }

    @PutMapping("/{evaluationId}")
    public ResponseEntity<ResponseUserEvaluation> updateUserEvaluation(@PathVariable Long evaluationId,
//                                                       @RequestBody Integer grade,
//                                                       @RequestBody String createAt
                                                            @RequestBody RequestUserEvaluation req
                                                                       ){
//ResponseEntity<ResponseUserEvaluation>
        UserEvaluationDto returnEvaluationDto =
                userEvaluationService.updateUserEvaluationByEvaluationId(evaluationId,
//                        grade, createAt);
                mapper.map(req,UserEvaluationDto.class));
        ResponseUserEvaluation returnUserEvaluation = mapper.map(returnEvaluationDto, ResponseUserEvaluation.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(returnUserEvaluation);
        //return ResponseEntity.status(HttpStatus.CREATED).body("성공");
    }

    @DeleteMapping ("/{evaluationId}")
    public ResponseEntity<String> updateUserEvaluation(@PathVariable Long evaluationId){

        String result = userEvaluationService.deleteUserEvaluationByEvaluationId(
                evaluationId);
//        ResponseUserEvaluation returnUserEvaluation = new ModelMapper().map(returnEvaluationDto, ResponseUserEvaluation.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }
}
