package com.iljo.userserver.service;

import com.iljo.userserver.jpa.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class FollowServiceImpl implements FollowService{

    UserRepository userRepository;

    public FollowServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }











}





