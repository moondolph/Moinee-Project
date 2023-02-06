import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import MainContentstwo from './MainContentstwo'

const RoomTag = (props) => {
// console.log(props)
    const [cookies] = useCookies(['iDinfo'])
    const [roominfo, setRoominfo] = useState({})
    const getuserSocialRoom = async () => {
        await axios.get(`http://34.68.3.131:8000/socialRoom/${props.room.roomId}`,{
          headers: {
              Authorization : `Bearer ${cookies.iDinfo.accesstoken}`
          }
        }).then((response) => {
            // console.log("방 간략정보에서 방장 프로필 가져옴");
            // console.log(response.data);
            setRoominfo(response.data);
            
      }
        ).catch((e) =>{
            console.log("간략정보 방장 프로필 가져오기 에러 : " + e)
            console.log("2");
      })
    }

    useEffect(() => {
        getuserSocialRoom();
    },[])

  return (
    <div key={props.roomId} className="ms-2 mb-5 width-22">
                <MainContentstwo room={roominfo} IsTag={false}/>
              </div>
  )
}

export default RoomTag;



