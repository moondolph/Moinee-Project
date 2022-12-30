const JoinRoomButton = () => {
    return (
	<div className="container" style={{margin:"40px", borderTop:"1pt"}}>
        <div className="justifySpaceAround" style={{minWidth:"520px"}}>
            <div>
                <div>2022. 12. 16 토요일</div>
                <img src='images\location.png' style={{width:"20px"}} alt="location" />
                <span className="fs-3">중구 회현동</span>
            </div>
            <span className="justifySpaceAround">
                <button className="btn btn-primary" style={{width:"150px"}}>참가 신청하기</button>
                <img className="" src='images\likeNotPushed.png' style={{width:"70px"}} alt="like button" />
            </span>
        </div> 

    </div>
    );
};

export default JoinRoomButton;