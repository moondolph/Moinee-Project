package com.iljo.socialroom.feign;

import com.iljo.socialroom.vo.ResponseEnter;
import com.iljo.socialroom.vo.ResponseUser;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.cloud.openfeign.FeignClientProperties;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(
        name="user",
        url = "34.68.3.131:8001",
        configuration = FeignClientProperties.FeignClientConfiguration.class
)
@Component
public interface UserClient {

    @GetMapping("/{userId}/room")
    ResponseUser getUsers(@PathVariable String userId);

    @GetMapping("/enteredUser/{roomId}")
    List<ResponseEnter> getEnteredUser(@PathVariable Long roomId);

}
