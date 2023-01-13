// 방 자세히보기 페이지에서 참여하기 버튼을 누를 수 있는 컴포넌트 입니다.
import { useState } from "react";
import axios from "axios";

// 방에 참여 -> enter table에 값 입력하기. json으로는 roomId만 보내주면 됨.
const RoomJoinButton = (props) => {

    
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
                <div className="text-start">
                    {props.room.meetingDate}<br/>
                    <img src='\images\location.png' style={{width:"20px", marginRight:"5px", paddingBottom:"11px"}} alt="location" />
                    {props.room.meetingLoc}
                </div>
                <span className="fs-3">{props.room.title}</span>
            </div>
            <div className="justifySpaceAround" style={{height:"80px"}}>
                <button onClick={enterRoom} className="btn btn-primary me-3" style={{width:"150px",}}>참가 신청하기</button>
                <img className="btn btn-light" src='\images\likeNotPushed.png' style={{width:"55px"}} alt="like button" />
            </div>
        </div> 

    </div>
    );
};

export default RoomJoinButton;