package com.iljo.userserver.service;


import com.iljo.userserver.dto.UserDto;


public interface UserService  {
    UserDto createUser(UserDto userDto);

    UserDto getUserByUserId(String userId);

    void deleteUserByUserId(String userId);

    UserDto updateUserByUserId(String userId, UserDto userDto);

    String login(String userId, String password);
}
