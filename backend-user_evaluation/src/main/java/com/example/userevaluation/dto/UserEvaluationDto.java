package com.example.userevaluation.dto;

import lombok.Data;

import java.util.Date;

@Data
public class UserEvaluationDto {

    private Long evaluationId;
    private String userId;
    private String evaluator;
    private Integer grade;
    private Date createAt;
}
