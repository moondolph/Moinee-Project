package com.iljo.userserver.feign;

import com.iljo.userserver.vo.ResponseRoomId;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="socialRoom")
@Component
public interface RoomClient {

    @GetMapping("/socialRoom/{room_id}/user")
    ResponseRoomId getRooms(@PathVariable Long room_id);

}
