package com.iljo.userserver.service;


import com.google.cloud.storage.BlobInfo;
import com.iljo.userserver.dto.UserDto;
import com.iljo.userserver.vo.RequestUser;
import org.springframework.web.multipart.MultipartFile;


public interface UserService  {
    UserDto createUser(UserDto userDto);

    UserDto getUserByUserId(String userId);

    void deleteUserByUserId(String userId);

    UserDto updateUserByUserId(String userId, UserDto userDto);

    String login(String userId, String password);

    BlobInfo uploadFileToGCS(RequestUser requestUser);

    BlobInfo uploadFileToGCSTest(MultipartFile file) ;
}
