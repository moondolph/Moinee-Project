package com.iljo.userserver.service;


import com.google.cloud.storage.BlobInfo;
import com.iljo.userserver.dto.UserDto;
import com.iljo.userserver.vo.RequestUser;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.security.core.userdetails.UserDetailsService;


public interface UserService  extends UserDetailsService {
    UserDto createUser(UserDto userDto);

    UserDto getUserByUserId(String userId);

    void deleteUserByUserId(String userId);

    UserDto updateUserByUserId(String userId, UserDto userDto);

    UserDto getUserDetailsByUserId(String userId);


//    String login(String userId, String password);

//    BlobInfo uploadFileToGCS(RequestUser requestUser);

    String uploadFile(MultipartFile file) ;
//    UserDto getUserDetailsByUserId(String userName);

//    String login(String userId, String password);
}
