package com.iljo.userserver.vo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class ResponseLogin {
    private String token;
    private String userId;
}
