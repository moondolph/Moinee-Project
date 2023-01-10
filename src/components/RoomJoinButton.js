// 방 자세히보기 페이지에서 참여하기 버튼을 누를 수 있는 컴포넌트 입니다.
import { useState } from "react";
import axios from "axios";

// 방에 참여 -> enter table에 값 입력하기. json으로는 roomId만 보내주면 됨.
const RoomJoinButton = () => {

    
    // const [roomId, setRoomId] = useState("");
    const enterRoom = ()=> {
        axios.post("http://localhost:3001/enterRoom", {
            userId : "jsonTest",
            roomId : 303030
        }).then(response => {
            alert('방에 참가하였습니다.');
            console.log('success');
        }).catch(error=>{
            console.log('error: ', error.response);
        })
    }

    return (
	<div className="container bg-body pt-5 pb-5">
        <hr/>
        <div className="justifySpaceAround" style={{minWidth:"520px"}}>
            <div>
                <div>2022. 12. 16 토요일</div>
                <img src='\images\location.png' style={{width:"20px"}} alt="location" />
                <span className="fs-3">중구 회현동</span>
            </div>
            <span className="justifySpaceAround">
                <button onClick={enterRoom} className="btn btn-primary" style={{width:"150px",}}>참가 신청하기</button>
                <img className="" src='\images\likeNotPushed.png' style={{width:"70px"}} alt="like button" />
            </span>
        </div> 

    </div>
    );
};

export default RoomJoinButton;