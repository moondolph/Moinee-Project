package com.iljo.user_evaluation.dto;

import lombok.Data;

@Data
public class User_evaluationDto {

    private Long id;
    private String user_id;
    private String evaluator;
    private Integer grade;
    private String createAt;
}
