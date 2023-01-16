import axios from 'axios'
import React from 'react'
import { useCookies } from 'react-cookie'
import MainContents from './MainContents'

const RoomTag = ({roomId}) => {

    const [cookies] = useCookies(['iDinfo'])
    const getUser = async () => {
        await axios.get(`http://34.68.3.131:8000/user/${cookies.iDinfo.userId}`,{
          headers: {
              Authorization : `Bearer ${cookies.iDinfo.accesstoken}`
          }
        }).then((response) => {
            console.log("방 간략정보에서 방장 프로필 가져옴");
            console.log(response);
            setRoomTag(response.data.userRoomTags);
            setUserTag(response.data.userFollows);
            setUserThumbnail(response.data.thumbnail);
      }
        ).catch((e) =>{
            console.log("간략정보 방장 프로필 가져오기 에러 : " + e)
            console.log("2");
      })
    }


  return (
    <div key={room.roomId} className="ms-2 mb-5 width-22">
                <MainContents room={room} IsTag={true}/>
              </div>
  )
}

export default RoomTag;



