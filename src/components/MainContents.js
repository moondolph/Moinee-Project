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

    let date = props.room.meetingDate
    props.room.meetingDate = `${date.substring(0,4)}. ${date.substring(5,7)}. ${date.substring(8,10)} ${date.substring(11, 13)}시 ${date.substring(14,16)}분`

    return (       
            <div className="bg-light container border border-1 mainContentMaxWidth pop-up-parent">
                <br/>
                <p>
                    {props.IsTag ? 
                    <NavLink className="fs-5 nav-link" to="" onClick={()=>{
                            deleteRoomTag(props.room.roomId);
                        }}>❌</NavLink> : null
                    }
                    
                    <span className="position-relative">
                        <img
                            src={`https://storage.googleapis.com/iljo-room/${props.room.roomThumbnail}`}
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
                <div className="mb-3 text-start text-secondary">
                    {props.room.meetingLoc.split(" ")[0] + " " + props.room.meetingLoc.split(" ")[1]}<br />
                    {props.room.meetingDate}
                </div>
                <div className="pop-up-child">
                    <SimpleRoom room={props.room}/>
                </div>
            </div>
        
    );
};

export default MainContents;