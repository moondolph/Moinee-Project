import React, { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import MainContents from '../components/MainContents';
import SideBarMain from '../components/SideBarMain';
import Pagination from '../components/Pagination';
import SortList from '../components/SortList';
import axios from 'axios';

const Rooms = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['id']);
  const navigate = useNavigate();

  // 로그인 상태인지 확인 후 아니라면 메인화면으로 돌려보낸다.
  // 또는 쿠키가 만료되어도 돌려보낸다.
  const goBack = () => {
    alert("로그인 후 이용 바랍니다.");
    navigate('/');
  }

  const loginCheck = ()=>{
    if (cookies.id === undefined) {
      goBack();
    }
	};
	useEffect(()=>{
		loginCheck();
	});  



  // 방 불러오기
  const [rooms, setRooms] = useState([]);
  const getRooms = useCallback(async () => {
    await axios.get("http://localhost:3001/roomList").then(response=>{
      console.log("불러온 데이터 : " + response.data)
      setRooms(response.data)

    }).catch(e=>{
      console.log(e)
    })
  })

  useEffect(()=>{
    getRooms();
  },[])

  return (
    <div className="d-flex">
      <div className="me-4 bg-secondary ">
        <div className="mt-5 pt-5">
          <SideBarMain />
        </div>
      </div>
      <div className="row mt-4">
        <div className='pt-3 mt-3 mb-3 d-flex justify-content-end'>
          <SortList />
        </div>
        <div className="ms-3 row">
          {rooms.map((room, index)=>{
            return(
              <div key={index} className="ms-3 mb-5 width-22">
                <MainContents room={room} IsTag={false}/>
              </div>)
          })}
          {/* {Array(16)
            .fill(1)
            .map((a, i) => a + i)
            .map((a2, i) => {
              return (
                <div key={i} className="ms-3 mb-5 width-22">
                  <MainContents />
                </div>
              );
            })} */}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
