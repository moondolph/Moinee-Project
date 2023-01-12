package com.iljo.socialroom.feign;

import com.iljo.socialroom.vo.ResponseEnter;
import com.iljo.socialroom.vo.ResponseUser;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name="user")
@Component
public interface UserClient {

    @GetMapping("/user/{userId}/room")
    ResponseUser getUsers(@PathVariable String userId);

    @GetMapping("/user/enteredUser/{roomId}")
    List<ResponseEnter> getEnteredUser(@PathVariable Long roomId);

}
