import axios from "axios";
import { useEffect, useState } from "react";

// 방에 입장했을 때 왼쪽 사이드바에 보이는 참여 인원 페이지입니다.

// 서버에서 방에 참여한 인원 정보 불러오기
const SideBarRoom = (props) => {

    const [hostThumbnail, setHostThumbnail] = useState("");

    return (
        <div className="container text-start pt-3 pb-5 roomSideBar width-226" style={{minWidth:"150px", backgroundColor:"white"}}>
            <span className="h5">참여인원</span>
            <hr /><br/>
                <div className="row mb-2">
                    <div className="col-3" style={{width:"50px"}}>
                            <img
                                src={`https://storage.googleapis.com/iljo-room/${hostThumbnail}`}
                                className="unifyProfilePicture"
                                alt="participant"
                                />
                    </div>
                    <div id="root" className="col fs-5">{props.room.host}(방장)</div>
                </div>
                {props.room.userList.map((user,index) =>{
                    if (user.userId === host) {
                        null
                    } else {
                    return(<div className="row mb-2">
                    <div className="col-3" style={{width:"50px"}}>
                            <img
                                src={`https://storage.googleapis.com/iljo-room/${user.thumbnail}`}
                                className="unifyProfilePicture"
                                alt="participant"
                                />
                    </div>
                    <div className="col fs-5">{user.userId}</div>
                </div>)
                }
            })}
        </div>
    );
};

export default SideBarRoom;