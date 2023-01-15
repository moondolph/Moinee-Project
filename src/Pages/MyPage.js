import React from 'react'
import MyPage2 from '../components/MyPage2';
import Profile from '../components/Profile';
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';

const MyPage = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['id']);
      // 유저 정보 불러오기
      const [user, setUser] = useState({});
      console.log(cookies ? cookies : "없다.")
  
      // 서버랑 연결할 때는, props에서 userId 꺼내서 URI에 넣어주어야 한다.
      const getUser = async () => {
          await axios.get("http://34.68.3.131:8000/user/abeathem1e",
          {
            headers: {
                Authorization : `Bearer ${cookies.id}`
            }
          }
          ).then((response) => {
              console.log("방 간략정보에서 방장 프로필 가져옴");
              console.log(response.data);
              setUser(response.data);
          }).catch((e) => {   
              console.log("간략정보 방장 프로필 가져오기 에러 : " + e);
              console.log("2");
          })
      }
  
  
      useEffect(() => {
          getUser();
          
      }, [])




  return (
    <div className="page container">
        <div>
            <Profile user={user}/>
        </div>
        <hr/>
        <div>
            <MyPage2 />
        </div>
    </div>
  )
}

export default MyPage;