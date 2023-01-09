package com.iljo.userserver.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.*;
import com.iljo.userserver.dto.UserDto;
import com.iljo.userserver.jpa.UserEntity;
import com.iljo.userserver.jpa.UserRepository;
import com.iljo.userserver.vo.RequestUser;
import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

import static org.aspectj.weaver.tools.cache.SimpleCacheFactory.path;

@Service
@Slf4j
public class UserServiceImpl implements UserService{

    Environment env;
    UserRepository userRepository;
    BCryptPasswordEncoder PasswordEncoder;

    @Autowired
    public UserServiceImpl(Environment env, UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.env = env;
        this.userRepository = userRepository;
        PasswordEncoder = passwordEncoder;
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

        // 아이디값이 존재하면 null 반환
        if (userEntity2.isPresent()){
            return null;
        }

        // 암호화
        userEntity.setEncryptedPwd(PasswordEncoder.encode(userDto.getEncryptedPwd()));

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
        // 암호화
        userEntity.setEncryptedPwd(PasswordEncoder.encode(userDto.getEncryptedPwd()));
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

        UserEntity userEntity = userRepository.findByUserIdAndEncryptedPwd(userId, password);

        String result = userEntity.getUserId();

        // String result = userRepository.findByUserIdAndPassword(userId, password).getUserId();

        return result;
    }
    /**
     * 서버에 있는 파일 gcs에 업로드
     *
    @Override
    public BlobInfo uploadFileToGCS(RequestUser requestUser) {
        try{
            String keyFileName = env.getProperty("spring.cloud.gcp.credentials.location");
            log.info(requestUser.getThumbnail());

            InputStream keyFile = ResourceUtils.getURL(keyFileName).openStream();
            Storage storage = StorageOptions.newBuilder().setProjectId("student-project-2022-368005")
                    .setCredentials(GoogleCredentials.fromStream(keyFile))
                    .build().getService();

            BlobId blobId = BlobId.of("iljo-bucket1", requestUser.getThumbnail());
            BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
                    .setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER))))
                    .build();


            Blob blob = storage
                    .create(blobInfo, new FileInputStream(requestUser.getThumbnail()));

            return blob;
        }catch(IOException e){
            log.error(e.getMessage());
            e.printStackTrace();
        }
        return null;
    }*/

    /**
     * 클라이언트에서 파일을 서버에 올리고 바로 클라우드 버킷에 파일이 저장되게 해주는 메소드
     * */
    @Override
    public BlobInfo uploadFile(MultipartFile file) {
        try{
            String keyFileName = env.getProperty("spring.cloud.gcp.credentials.location");
//            System.out.println(keyFileName);

            InputStream keyFile = ResourceUtils.getURL(keyFileName).openStream();
            Storage storage = StorageOptions.newBuilder().setProjectId("student-project-2022-368005")
                    .setCredentials(GoogleCredentials.fromStream(keyFile))
                    .build().getService();

            // 서버에 저장될 파일 경로 지정
            File destination = new File(System.getProperty("user.dir") + "/" + file.getOriginalFilename());
            file.transferTo(destination);
//            log.info(destination.toString());

            // 클라우드 버킷에 저장할 파일의 경로 입력
            BlobId blobId = BlobId.of("iljo-bucket1", destination.getAbsolutePath());
//            log.info(destination.getAbsolutePath());

//            System.out.println(file.getOriginalFilename());

            BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
                    .setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER))))
                    .build();

            Blob blob = storage
                    .create(blobInfo, new FileInputStream(file.getOriginalFilename()));

            File file1 = new File(destination.getAbsolutePath());
            file1.delete();

            return blob;
        }catch(IOException e){
            log.error(e.getMessage());
            e.printStackTrace();
        }
        return null;
    }
}
