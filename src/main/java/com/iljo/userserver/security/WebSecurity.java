package com.iljo.userserver.security;


import com.iljo.userserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.servlet.Filter;
@Configuration
@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {

    private UserService userService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private Environment env;


    public WebSecurity(UserService userService, BCryptPasswordEncoder bCryptPasswordEncoder, Environment env) {
        this.userService = userService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.env = env;
    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();

    /**
     * gateway를 지날 때 authenticationFilter에서 인증을 한번 받는다.
     * */
        http.authorizeRequests().antMatchers("/login/","/users/").permitAll()
                .and()
                        .formLogin().disable()  //폼로그인 안쓰겠다
                .httpBasic().disable();


        http.authorizeRequests().antMatchers("/**")
                .access("hasIpAddress('34.68.3.131') or hasIpAddress('127.0.0.1')")
                .and()
                .authorizeRequests()
                .and()
                .addFilter(getAuthenticationFilter())
                .logout();

        http.headers().frameOptions().disable();
    }

    private com.iljo.userserver.security.AuthenticationFilter getAuthenticationFilter() throws Exception{
        com.iljo.userserver.security.AuthenticationFilter authenticationFilter =
                new com.iljo.userserver.security.AuthenticationFilter(authenticationManager(), userService, env);

        return authenticationFilter;
    }

    // select pwd from users where email=?
    // db_pwd(encrypted) == input_pwd(encrypted)
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder);
    }
}
