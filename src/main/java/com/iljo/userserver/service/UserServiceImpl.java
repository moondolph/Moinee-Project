package com.iljo.userserver.service;

import com.iljo.userserver.dto.UserDto;
import com.iljo.userserver.jpa.UserEntity;
import com.iljo.userserver.jpa.UserRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    /**
     * 회원가입을 위한 method
     * */
    @Override
    public UserDto createUser(UserDto userDto) {

        // Dto와 entity mapping을 위해 필요한 클래스
        ModelMapper mapper = new ModelMapper();

        // 일치 여부
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        // entity를 Dto와 mapping
        UserEntity userEntity = mapper.map(userDto, UserEntity.class);

        // 인터페이스 save기능을 이용해 db에 저장
        userRepository.save(userEntity);

        // return할 값을 좀 전에 만들은 uesrEntity를 이욯해 mapping
        UserDto returnUserDto = mapper.map(userEntity, UserDto.class);

        return returnUserDto;

    }

    /**
     * 유저 한 명의 정보를 불러오기위한 메소드
     * */
    @Override
    public UserDto getUserByUserId(String userId) {

        UserEntity userEntity = userRepository.findByUserId(userId);

        UserDto userDto = new ModelMapper().map(userEntity, UserDto.class);

        return userDto;

    }

    @Override
    public void deleteUserByUserId(String userId) {

        userRepository.deleteByUserId(userId);

    }

    @Override
    public UserDto updateUserByUserId(String userId, UserDto userDto) {

        ModelMapper mapper = new ModelMapper();

        UserEntity userEntity = userRepository.findByUserId(userId);

        userEntity.setAddress(userDto.getAddress());
        userEntity.setName(userDto.getName());
        userEntity.setBirthday(userDto.getBirthday());
        userEntity.setPassword(userDto.getPassword());
        userEntity.setLatitude(userDto.getLatitude());
        userEntity.setLongitude(userDto.getLongitude());
        userEntity.setThumbnail(userDto.getThumbnail());
        userRepository.save(userEntity);

        UserDto resultUserDto = mapper.map(userEntity, UserDto.class);

        return resultUserDto;
    }
}
