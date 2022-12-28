package com.iljo.userserver.service;


import com.iljo.userserver.dto.UserDto;

public interface UserService  {
    UserDto createUser(UserDto userDto);
}
