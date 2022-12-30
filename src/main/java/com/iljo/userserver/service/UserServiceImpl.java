package com.iljo.userserver.service;

import com.iljo.userserver.dto.UserDto;
import com.iljo.userserver.jpa.UserEntity;
import com.iljo.userserver.jpa.UserRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
        Optional<UserEntity> userEntity2 = userRepository.findById(userEntity.getUserId());
        if (userEntity2.isPresent()){
            return null;
        }
        // 인터페이스 save기능을 이용해 db에 저장
        UserEntity userEntity1 = userRepository.save(userEntity);

        // return할 값을 좀 전에 만들은 uesrEntity를 이욯해 mapping
//        UserDto returnUserDto = mapper.map(userEntity1, UserDto.class);

        return mapper.map(userEntity1, UserDto.class);

    }

    /**
     * 유저 한 명의 정보를 불러오기위한 메소드
     * */
    @Override
    public UserDto getUserByUserId(String userId) {

        // 입력한 userId와 일치하는 user의 정보를 select해서 userEntity에 넣음
        UserEntity userEntity = userRepository.findByUserId(userId);

        // userEntity를 userDto에 매핑
        UserDto userDto = new ModelMapper().map(userEntity, UserDto.class);

        return userDto;

    }

    /**
     * 유저 한 명의 정보를 삭제하기위한 메소드
     * */
    @Override
    public void deleteUserByUserId(String userId) {
        // id값에 해당하는 user의 정보를 지움
        userRepository.deleteById(userId);

    }

    /**
     * 유저 한명의 정보를 수정하기 위한 메소드
     * */
    @Override
    public UserDto updateUserByUserId(String userId, UserDto userDto) {

        ModelMapper mapper = new ModelMapper();

        // userId에 해당하는 user를 불러와서 entity에 담는다
        UserEntity userEntity = userRepository.findByUserId(userId);

//        Optional<UserEntity> userEntity2 = userRepository.findById(userEntity.getUserId());
//        if (userEntity2.isEmpty()){
//            return null;
//        }

        // 수정한 정보를 바탕으로 userentity의 각 속성에 넣는다.(email과 userId는 변경 불가)
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

    /**
     * 로그인을 위한 메소드
     * */
    @Override
    public String login(String userId, String password) {

//        ModelMapper mapper = new ModelMapper();

        UserEntity userEntity = userRepository.findByUserIdAndPassword(userId, password);

        String result = userEntity.getUserId();

        // String result = userRepository.findByUserIdAndPassword(userId, password).getUserId();

        return result;
    }
}
