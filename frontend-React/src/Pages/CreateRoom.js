import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useCookies } from 'react-cookie';

export default function CreateRoom() {
  
  const [roomTitle,setRoomTitle] = useState("");
  const [roomTag,setRoomTag] = useState([]);
  const [meetingDate,setMeetingDate] = useState("");
  const [location,setLocation] = useState("");
  const [capacity,setCapacity] = useState("");
  const [introduction,setIntroduction] = useState("");
  
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [userId, setUserId] = useState("");

  // 방만들기 함수, 엔터함수도 만들자 자기가 만들면 엔터가 되는 것이니까.. 그리고 끝나면 만든 방으로 들어가게끔 해줘야겠죠.
  const create = () => {
    setUserId(cookies.user.userId);
    let date = new Date();
    axios.post('http://localhost:4000/social_room', {
      host : userId,
      title: roomTitle,
      category: roomTag,
      description:introduction,
      meetingDate: meetingDate,
      createDate: date,
      meetingLoc:location,
      latitude: 0.00,
      longitude: 0.00,
      limitMember:capacity,
      roomThumbnail: "멀티파트 후 올립시다"
      })
    .then(response => {
      alert('방 생성 완료!');
      console.log('Room creation complete');
    })
    .catch(error=>{
      console.log('An error occurred', error.response);
    })
  }
  
  //체크박스 value 값 받아오는 함수
  const check = e =>{
    //두 번 체크하면 받아오지 않게 해야 함
    
    //두번 째 체크했을 때
    if(roomTag.includes(e.target.value)){
      for(var i = 0; i < roomTag.length; i++){   //반복문 돌려서
        if(roomTag[i] == e.target.value) {       //배열에 값이 들어가있으면
          roomTag.splice(i, 1);                  //제거해주고
          break;  //바로 반복문 종료
        }
      }
      setRoomTag(roomTag);          //마지막에 set으로 상태저장
    }
    //처음 체크했을 때    
    else{
      roomTag.push(e.target.value); //바로 배열에 저장
      setRoomTag(roomTag);     //set으로 상태저장
    }  
  }
  return (
    <div className="page container border border-light border-3 text-bg-info bg-opacity-50">

      <div className="contentWrap ">
        <h1>방 생성 <span className="badge bg-secondary">New</span></h1>


        <div className="inputTitle">🔖제목</div>
        <div className="input-group mb-3">
          <input type="text" value={roomTitle} placeholder="제목을 입력하세요" className="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{setRoomTitle(e.target.value);}} />
        </div>


        <div className="inputTitle">✉️태그</div>
        <div className="inputWrap justify-content-center"> 
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="운동" onChange={check}></input>
            <label className="form-check-label" for="inlineCheckbox1">운동</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="여행" onChange={check}></input>
            <label className="form-check-label" for="inlineCheckbox2">여행</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="독서" onChange={check}></input>
            <label className="form-check-label" for="inlineCheckbox2">독서</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="음악" onChange={check}></input>
            <label className="form-check-label" for="inlineCheckbox2">음악</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="게임" onChange={check}></input>
            <label className="form-check-label" for="inlineCheckbox2">게임</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="영화" onChange={check}></input>
            <label className="form-check-label" for="inlineCheckbox2">영화</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="음식" onChange={check}></input>
            <label className="form-check-label" for="inlineCheckbox2">음식</label>
          </div>
        </div>

        <div className="inputTitle">🗓️모임날짜</div>
        <div className="inputWrap">
          <input
            className="date"
            type="date"
            value={meetingDate}
            onChange={(e)=>{setMeetingDate(e.target.value);
            }}/>
        </div>

        <div className="inputTitle">🏢장소</div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={location} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{setLocation(e.target.value);
          }}/>
        </div>

        <div className="inputTitle">👪제한인원</div>
        <div className="inputWrap">
          <select className="capacity" onClick={(e)=>{setCapacity(e.target.value)}}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10명이상">10명이상</option>
          </select>
        </div>

        <div className="inputTitle">✍️내용</div>
        <div className="input-group mb-3 col-5 form-floating">
          <input type="text"  className="form-control height " id="floatingInput" value={introduction} onChange={(event) => {setIntroduction(event.target.value);
          }}/></div>  

        <div className="inputTitle">사진을 등록해주세요</div>
        <input type="file"/>

        <div className="d-grid gap-2 col-3 mx-auto mt-3" >
          <button className="btn btn-outline-success fs-4" type="button" onClick={create}>🆗확인</button>
        </div>

      </div>


    </div>
  );
}
