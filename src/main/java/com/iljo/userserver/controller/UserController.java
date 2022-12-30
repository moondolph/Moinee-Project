package com.iljo.userserver.controller;

import com.iljo.userserver.dto.UserDto;
import com.iljo.userserver.service.UserService;
import com.iljo.userserver.vo.RequestUser;
import com.iljo.userserver.vo.ResponseUser;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 회원가입을 위한 controller
     * */
    @PostMapping("/")
    public ResponseEntity<ResponseUser> createUser(@RequestBody RequestUser user) {
        ModelMapper mapper = new ModelMapper();

        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        UserDto userDto = mapper.map(user, UserDto.class);

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

        UserDto userDto = userService.getUserByUserId(userId);

        ResponseUser returnValue = mapper.map(userDto ,ResponseUser.class);


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
        password = user.getPassword();

        String result = userService.login(userId, password);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }



}
