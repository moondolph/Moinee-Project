package com.iljo.userserver.controller;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobInfo;
import com.iljo.userserver.dto.UserDto;
import com.iljo.userserver.jpa.EnterEntity;
import com.iljo.userserver.service.EnterService;
import com.iljo.userserver.service.UserService;
import com.iljo.userserver.vo.RequestUser;
import com.iljo.userserver.vo.ResponseRoomId;
import com.iljo.userserver.vo.ResponseUser;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
@Slf4j
//@CrossOrigin(origins = "127.0.0.1:8808")
public class UserController {

    UserService userService;

    EnterService enterService;
    @Autowired
    public UserController(UserService userService, EnterService enterService) {
        this.userService = userService;
        this.enterService = enterService;
    }

    /**
     * 회원가입을 위한 controller
     * */
    @PostMapping("/")
    @Transactional
    public ResponseEntity<ResponseUser> createUser(@RequestBody RequestUser user) {
        ModelMapper mapper = new ModelMapper();
        System.out.println(user instanceof Object);
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

//        BlobInfo blobInfo = userService.uploadFileToGCS(user);
//        log.info("blogInfo : ", blobInfo);

//        if(blobInfo == null){
//            return null;
//        }
        UserDto userDto = mapper.map(user, UserDto.class);
        log.info(user.toString());
        log.info(userDto.toString());
        UserDto userDto1 = userService.createUser(userDto);
        log.info(userDto1.toString());
        ResponseUser responseUser = mapper.map(userDto1, ResponseUser.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseUser);
    }

    /*@PostMapping("/")
    @Transactional
    public ResponseEntity<ResponseUser> createUser(@RequestBody RequestUser user, @RequestPart MultipartFile file) {
        ModelMapper mapper = new ModelMapper();
        System.out.println(user instanceof Object);
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        BlobInfo blobInfo = userService.uploadFileToGCSTest(file);
        log.info("blogInfo : ", blobInfo);

        if(blobInfo == null){
            return null;
        }

        user.setThumbnail(file.getOriginalFilename());
        UserDto userDto = mapper.map(user, UserDto.class);
        log.info(user.toString());
        log.info(userDto.toString());
        UserDto userDto1 = userService.createUser(userDto);
        log.info(userDto1.toString());
        ResponseUser responseUser = mapper.map(userDto1, ResponseUser.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseUser);
    }*/

    @PostMapping("/upload")
    public ResponseEntity upload(@RequestPart MultipartFile file) {
//        String originalFileName = file.getOriginalFilename();
//        File destination = new File("https://storage.googleapis.com/iljo-bucket1/" + originalFileName);
//        log.info(destination.toString());
//        try {
//            file.transferTo(destination);
//        } catch (IOException e) {
//            log.error(e.toString());
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(originalFileName);
//        }
//        return ResponseEntity.status(HttpStatus.CREATED).body(originalFileName);

        BlobInfo blobInfo = userService.uploadFile(file);

        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(blobInfo);
        } catch (Exception e) {
            log.error(e.toString());
            return null;
        }

    }


    /**
     * userId에 해당하는 회원정보를 불러오기 위한 controller
     * */
    @GetMapping("/{userId}")
    public ResponseEntity<ResponseUser> getUser(@PathVariable("userId") String userId){
        ModelMapper mapper = new ModelMapper();

        List<EnterEntity> enterEntityList = enterService.getEnterByUserId(userId);

        List<ResponseRoomId> result = new ArrayList<>();

        // List에 받아온 데이터를 맵핑해서 넣어준다.
        enterEntityList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseRoomId.class));
        });

        UserDto userDto = userService.getUserByUserId(userId);

        ResponseUser returnValue = mapper.map(userDto ,ResponseUser.class);
        returnValue.setRooms(result);


        return ResponseEntity.status(HttpStatus.OK).body(returnValue);

    }

    /**
     * 회원정보를 삭제하기 위한 controller
     * */
    @DeleteMapping("/{userId}")
    @Transactional
    public ResponseEntity<String> deleteUser(@PathVariable("userId") String userId){
        userService.deleteUserByUserId(userId);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("삭제");
    }

    /**
     * 회원정보를 수정하기 위한 controller
     * */
    @PutMapping("/{userId}")
    @Transactional
    public ResponseEntity<ResponseUser> updateUser(@PathVariable("userId") String userId, @RequestBody RequestUser user){

        ModelMapper mapper = new ModelMapper();

        UserDto userDto = mapper.map(user, UserDto.class);
        // userService.updateUserByUserId(userId, userDto);

        ResponseUser responseUser = mapper.map(userService.updateUserByUserId(userId, userDto), ResponseUser.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseUser);
    }


    /**
     * 로그인을 위한 controller
     * */
    @PostMapping("/login")
    @Transactional
    public ResponseEntity<String> login(@RequestBody RequestUser user, String userId, String password){

        userId = user.getUserId();
        password = user.getEncryptedPwd();

        String result = userService.login(userId, password);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }



}
