package com.iljo.userserver.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.iljo.userserver.dto.UserDto;
import com.iljo.userserver.service.UserService;
import com.iljo.userserver.vo.RequestLogin;
import com.iljo.userserver.vo.ResponseLogin;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

@Slf4j

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final UserService userService;
    private final Environment env;

//    @Autowired
//    ResponseLogin responseLogin;

    public AuthenticationFilter(AuthenticationManager authenticationManager, UserService userService, Environment env) {
        super.setAuthenticationManager(authenticationManager);
        this.userService = userService;
        this.env = env;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try{
            /**
             * login할 때 사용한 id와 passwd 가져오는 코드
             * */
            RequestLogin creds = new ObjectMapper().readValue(request.getInputStream(), RequestLogin.class);

            /**
             * 인증에 필요한 값들 리턴
             * */
            return getAuthenticationManager().authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getUserId(),
                            creds.getEncryptedPwd(),
                            new ArrayList<>()
                    )
            );
        }catch (IOException e){
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        String userName = ((User)authResult.getPrincipal()).getUsername();
        UserDto userDetails = userService. getUserDetailsByUserId(userName);
        String token = Jwts.builder()
                .setSubject(userDetails.getUserId())
                .setExpiration(new Date(System.currentTimeMillis() +
                        Long.parseLong(env.getProperty("token.expiration_time"))))
                .signWith(SignatureAlgorithm.HS512, env.getProperty("token.secret"))
                .compact();

        response.addHeader("token", token);
        response.addHeader("userId", userDetails.getUserId());

//        responseLogin.setToken(token);
//        responseLogin.setToken(userDetails.getUserId());


        response.getWriter().write(token + " " + userDetails.getUserId());

        response.setHeader(token,userDetails.getUserId());

        Cookie cookie1 = new Cookie("token", token);
        Cookie cookie2 = new Cookie("userId", userDetails.getUserId());
        response.addCookie(cookie1);
        response.addCookie(cookie2);

    }
}
