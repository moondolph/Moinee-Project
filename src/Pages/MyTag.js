import React from 'react';
import MainContents from '../components/MainContents';
import TagUsersProfile from '../components/TagUsersProfile';
import { useState, useEffect } from "react";
import axios from "axios";

const MyTag = () => {
  const [roomTag, setRoomTag] = useState([]);
  const [userTag, setUserTag] = useState([]);
  const [userThumbnail, setUserThumbnail] = useState([]);

  const getUser = async () => {
    await axios.get("http://localhost:3001/user").then((response) => {
        console.log("방 간략정보에서 방장 프로필 가져옴");
        console.log(response);
        setRoomTag(response.data.roomTag);
        setUserTag(response.data.userTag);
        setUserThumbnail(response.data.thumbnail);
  }
    ).catch((e) =>{
        console.log("간략정보 방장 프로필 가져오기 에러 : " + e)
        console.log("2");
  })
}

useEffect(() => {
  getUser();
},[])


  return (
    <div className="d-flex">
      <div className="row mt-4">
        <div className="ms-3 row">
          <div className='mt-5'>
            <h1>Room Tag(내가 찜한 방)</h1>    {/*내가 좋아요 누른 방들 보여주기*/}
          </div>
          <hr />
          {roomTag.map((room, i) => {
            return (
              <div key={room.roomId} className="ms-2 mb-5 width-22">
                <MainContents room={room} IsTag={true}/>
              </div>
            )
          })}
        </div>

        <div className="ms-3 row">
          <div>
            <h1>User Tag(내가 팔로우한 유저)</h1>       {/*내가 팔로우한 사람들 보여주기*/} 
          </div>
          <hr />
          {userTag.map((user, i) => {
            return (
              <div key={user.userId} className="ms-2 mb-5 width-22">
                <TagUsersProfile user={user} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default MyTag;