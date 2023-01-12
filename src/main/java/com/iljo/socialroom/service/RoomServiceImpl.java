package com.iljo.socialroom.service;

import com.iljo.socialroom.dto.RoomDto;
import com.iljo.socialroom.jpa.RoomEntity;
import com.iljo.socialroom.jpa.RoomRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class RoomServiceImpl implements RoomService{

    private RoomRepository roomRepository;


    @Autowired
    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;

    }



    @Override
    public RoomEntity createRoom(RoomDto roomDto) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        RoomEntity roomEntity = mapper.map(roomDto, RoomEntity.class);

//        if (roomEntity.getRoom_id() != null){
//            return null;
//        }

        return roomRepository.save(roomEntity);
    }

    @Override
    public List<RoomEntity> getRoomByAll() {

        return roomRepository.findAll();
    }

    @Override
    public List<RoomEntity> findByCategory(String category) {

        return roomRepository.findByCategory(category);
    }

    @Override
    public RoomEntity getRoomInfo(Long roomId){
        RoomEntity roomEntity = roomRepository.findById(roomId).orElse(null);
        return roomEntity;
    }

   @Override
    public RoomEntity updateRoomInfo(Long roomId, RoomDto roomDto) {
        ModelMapper mapper = new ModelMapper();
        RoomEntity roomEntity = mapper.map(roomDto, RoomEntity.class);
        log.info(roomId.toString());
        RoomEntity target = roomRepository.findById(roomId).orElse(null);
        log.info(target.toString());

        if (target == null || roomId != target.getRoomId()){
            return null;
        }

        target.putRoomInfo(roomEntity);
       return roomRepository.save(target);

    }
    @Override
    public RoomEntity deleteRoom(Long roomId){
        RoomEntity roomEntity = roomRepository.findById(roomId).orElse(null);
        if (roomEntity == null){
            return null;
        }
        return roomEntity;

    }

}
