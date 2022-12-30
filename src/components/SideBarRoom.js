// 방에 입장했을 때 왼쪽 사이드바에 보이는 참여 인원 페이지입니다.

const SideBarRoom = () => {
    return (
        <div className="container text-start">
            <span className="h5">참여인원</span>
            <hr /><br/>
                <div className="row">
                    <div className="col-3" style={{width:"50px"}}>
                            <img
                                src='images\profilePicture.png'
                                className="unifyProfilePicture"
                                alt="host"
                            />
                    </div>
                    <div className="col fs-5">이한수 (방장)</div>
                </div>
                <div className="row">
                    <div className="col-3" style={{width:"50px"}}>
                            <img
                                src='images\profilePicture.png'
                                className="unifyProfilePicture"
                                alt="participant"
                                />
                    </div>
                    <div className="col fs-5">이한수</div>
                </div>
                <div className="row">
                    <div className="col-3" style={{width:"50px"}}>
                            <img
                                src='images\profilePicture.png'
                                className="unifyProfilePicture"
                                alt="participant"
                                />
                    </div>
                    <div className="col fs-5">이한수</div>
                </div>

        </div>
    );
};

export default SideBarRoom;