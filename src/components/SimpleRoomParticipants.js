import { NavLink } from "react-router-dom";
// 메인 화면에 있는 콘텐츠에 커서를 올렸을 때 표시되는 창의
// 오른쪽 아래에 위치하는 인원수, 요금, 입장 버튼 부분입니다.
const SimpleRoomParticipants = () => {
    return (
	<div className="container border border-5 text-start">
        <h4>간략제목</h4>
        <hr/>
        <p>
            선착순 정원500명 | 2022.12.20 (화) 23:59까지 | 481명 신청가능
        </p>
        <p className="text-end" style={{display:"flex"}}>
            {/* 방 입장버튼 */}
            <NavLink to="/Rooms/RoomDetail/" className="nav-link btn btn-primary" type="submit" style={{marginLeft:"auto"}}>입장하기&nbsp;</NavLink>
            {/* 좋아요 버튼 */}
            <NavLink to="#">
                <img src='/images\likeNotPushed.png' style={{width:"30px", marginInline:"10px 5%"}} alt="like" />
            </NavLink>
        </p>
    </div>
    );
};

export default SimpleRoomParticipants;