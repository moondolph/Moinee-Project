// 방에 입장했을 때 왼쪽 사이드바에 보이는 참여 인원 페이지입니다.

const SideBarRoom = () => {
    return (
        <div class="container text-start">
            <span class="h5">참여인원</span>
            <hr /><br/>
                <div class="row">
                    <div class="col-3" style={{width:"50px"}}>
                            <img
                                src='images\profilePicture.png'
                                class="unifyProfilePicture"
                                alt="host"
                            />
                    </div>
                    <div class="col fs-5">이한수 (방장)</div>
                </div>
                <div class="row">
                    <div class="col-3" style={{width:"50px"}}>
                            <img
                                src='images\profilePicture.png'
                                class="unifyProfilePicture"
                                alt="participant"
                                />
                    </div>
                    <div class="col fs-5">이한수</div>
                </div>
                <div class="row">
                    <div class="col-3" style={{width:"50px"}}>
                            <img
                                src='images\profilePicture.png'
                                class="unifyProfilePicture"
                                alt="participant"
                                />
                    </div>
                    <div class="col fs-5">이한수</div>
                </div>

        </div>
    );
};

export default SideBarRoom;