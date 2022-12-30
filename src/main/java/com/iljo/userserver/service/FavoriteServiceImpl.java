package com.iljo.userserver.service;

import com.iljo.userserver.jpa.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class FavoriteServiceImpl implements FavoriteService{

    UserRepository userRepository;

    public FavoriteServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}





