package com.example.userevaluation.vo;

import lombok.Data;

@Data
public class ResponseUserEvaluation {

    private Long evaluationId;
    private String userId;
    private String evaluator;
    private Integer grade;
    private String createAt;
}
