package com.iljo.socialroom.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.*;
import com.iljo.socialroom.dto.RoomDto;
import com.iljo.socialroom.jpa.RoomEntity;
import com.iljo.socialroom.jpa.RoomRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class RoomServiceImpl implements RoomService{

    private RoomRepository roomRepository;

    private Environment env;

    @Autowired
    public RoomServiceImpl(RoomRepository roomRepository, Environment env) {
        this.roomRepository = roomRepository;
        this.env = env;
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

    @Override
    public String uploadFile(MultipartFile file) {
        try {
            String keyFileName = env.getProperty("spring.cloud.gcp.credentials.location");

            InputStream keyFile = ResourceUtils.getURL(keyFileName).openStream();
            Storage storage = StorageOptions.newBuilder().setProjectId("student-project-2022-368005")
                    .setCredentials(GoogleCredentials.fromStream(keyFile))
                    .build().getService();

            // 서버에 저장될 파일 경로 지정
            File destination = new File(System.getProperty("user.dir") + "/" + file.getOriginalFilename());
            file.transferTo(destination);

            String now = LocalTime.now().toString().replace(":","").replace(".","");

            String fileName = now + file.getOriginalFilename();

            // 클라우드 버킷에 저장될 파일 이름 만들어주기
            BlobId blobId = BlobId.of("iljo-room", fileName);

            BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
                    .setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER))))
                    .build();

            // 버킷에 파일 저장하고 저장될 파일의 서버상 경로 입력
            storage.create(blobInfo, new FileInputStream(file.getOriginalFilename()));

            // 버킷에 파일 올린 다음 서버에서 파일 삭제
            File file1 = new File(destination.getAbsolutePath());
            file1.delete();

            return fileName;

        } catch (IOException e) {
            log.error(e.getMessage());
            e.printStackTrace();
        }

        return null;
    }

}
