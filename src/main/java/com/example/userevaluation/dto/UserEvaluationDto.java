package com.example.userevaluation.dto;

import lombok.Data;

@Data
public class UserEvaluationDto {

    private Long evaluationId;
    private String userId;
    private String evaluator;
    private Integer grade;
    private String createAt;
}
