package com.iljo.userserver.controller;

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
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
@Slf4j

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
    public ResponseEntity<ResponseUser> createUser(@RequestBody RequestUser user) {
        ModelMapper mapper = new ModelMapper();

        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        UserDto userDto = mapper.map(user, UserDto.class);
        log.info(userDto.toString());
        UserDto userDto1 = userService.createUser(userDto);

        ResponseUser responseUser = mapper.map(userDto1, ResponseUser.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseUser);
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
    public ResponseEntity<String> deleteUser(@PathVariable("userId") String userId){
        userService.deleteUserByUserId(userId);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("삭제");
    }

    /**
     * 회원정보를 수정하기 위한 controller
     * */
    @PutMapping("/{userId}")
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
    public ResponseEntity<String> login(@RequestBody RequestUser user, String userId, String password){

        userId = user.getUserId();
        password = user.getEncryptedPwd();

        String result = userService.login(userId, password);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }



}
