import { NavLink } from "react-router-dom";
import axios from "axios";

// 메인 화면에 뜨는 방들을 구현한 페이지 입니다.
import SimpleRoom from "../Pages/SimpleRoom";

const MainContents = (props) => {

    const deleteRoomTag = async (roomId) => {
        await axios.delete(`http://localhost:3001/user/${roomId}`).then((response) =>{
            console.log("성공");
        }).catch((e) =>{
            console.log(e);
        })
    }
    return (
        <NavLink className="nav-link" to="/Rooms/RoomDetail">
            <div className="bg-light container border border-1 mainContentMaxWidth pop-up-parent">
                <br/>
                <p>
                    
                    <NavLink className="fs-5 nav-link" to="/Users/MyTag" onClick={()=>{
                            deleteRoomTag(props.room.roomId);
                        }}>❌</NavLink> 
                    
                    <span className="position-relative">
                        <img
                            src={props.room.roomThumbnail}
                            className="unifyContentPicture"
                            alt="room preview"
                        />
                        {/* 좋아요 배지 */}
                        <span className="position-absolute top-90 start-100 translate-middle badge rounded-pill text-bg-light" 
                        >
                            <img alt="좋아요" src='\images\likeNotPushed.png' style={{width:"15px"}}/>
                            {/* 좋아요 개수 */}&nbsp;{props.room.roomLikes}
                        </span>
                    </span>
                </p>
                    <h6 className="text-start">{props.room.title}</h6>
                <div>
                    {props.room.meetingDate},
                    {props.example}
                </div>
                <div class="pop-up-child">
                    <SimpleRoom room={props.room}/>
                </div>
            </div>
        </NavLink>
    );
};

export default MainContents;