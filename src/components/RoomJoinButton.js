// 방 자세히보기 페이지에서 참여하기 버튼을 누를 수 있는 컴포넌트 입니다.
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

// 방에 참여 -> enter table에 값 입력하기. json으로는 roomId만 보내주면 됨.
const RoomJoinButton = (props) => {

    // 방 참가시 유저 아이디를 요청하기 위해 쿠키를 불러옴
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    
    // 방에 참가하는 함수
    const enterRoom = useCallback(()=> {
        axios.post(`http://34.68.3.131:8000/user/${cookies.user.userId}/enter`, { // 유저 서버에 보내야 하므로 서버 해결되면 수정하자.
            roomId : props.room.roomId,
        }).then(response => {
            alert('방에 참가하였습니다.');
            console.log('success');
        }).catch(error=>{
            console.log('error: ', error.response);
        })
    },[]);
    
    // 방에서 나오는 함수
    const leaveRoom = useCallback(()=> {
        axios.post(`http://localhost:3001//${cookies.user.userId}/enter/${props.room.roomId}`, { // 유저 서버에 보내야 하므로 서버 해결되면 수정하자.
            roomId : props.room.roomId,
        }).then(response => {
            alert('방에서 나왔습니다.');
            console.log('leaved the room successfully');
        }).catch(error=>{
            console.log('error: ', error.response);
        })
    },[]);


    // 방에 참가중인지 확인하기 위한 코드들
    const [userslist, setUsersList] = useState([]);
    const [isEntered, setIsEntered] = useState(false);
    const [loginId, setLoginId] = useState("");
    const checkIsEntered = () => {
        setUsersList(props.room.userList);
        setLoginId(cookies.user.userId)
        setIsEntered(userslist.includes(loginId));
    }
    useEffect(()=>{
        checkIsEntered();
    },[enterRoom, leaveRoom])

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
                { isEntered === false
                // 방 유저리스트에 내 아이디가 없다면 참가하기, 있다면 나오기 버튼을 표시한다.
                ? <button onClick={enterRoom} className="btn btn-primary me-3" style={{width:"150px",}}>참가하기</button>
                : <button onClick={leaveRoom} className="btn btn-danger me-3" style={{width:"150px",}}>방나오기</button>
                }
                <img className="btn btn-light" src='\images\likeNotPushed.png' style={{width:"55px"}} alt="like button" />
            </div>
        </div> 

    </div>
    );
};

export default RoomJoinButton;