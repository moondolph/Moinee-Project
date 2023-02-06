import { NavLink } from "react-router-dom";
// 메인 화면에 있는 콘텐츠에 커서를 올렸을 때 표시되는 창의
// 오른쪽 아래에 위치하는 인원수, 요금, 입장 버튼 부분입니다.
const SimpleRoomParticipants = (props) => {

    const roomId = props.room.roomId;
    return (
	<div className="container border border-5 text-start">
        <h4>{props.room.title}</h4>
        <hr/>
        <p>
            정원 {props.room.limitMember}명 | 모임 시간 {props.room.meetingDate}
        </p>
        <p className="text-end" style={{display:"flex"}}>
            {/* 방 입장버튼 */}
            <NavLink to="/Rooms/RoomDetail/" state={{ roomId }} className="btn btn-primary" type="submit" style={{marginLeft:"auto"}}>입장하기&nbsp;</NavLink>
            {/* 좋아요 버튼 */}
            <NavLink to="#">
                <img src='/images\likeNotPushed.png' style={{width:"30px", marginInline:"10px 5%"}} alt="like" />
            </NavLink>
        </p>
    </div>
    );
};

export default SimpleRoomParticipants;