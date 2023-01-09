// room thumbnail 및 설명 부분
import axios from "axios";
import { useEffect, useState } from "react";
const hashTagList = [
    {
        hashTag: "야외"
    },
    {
        hashTag: "별구경"
    },
    {
        hashTag: "천체 관측"
    },
    {
        hashTag: "밤마실"
    }
]

const RoomArticle = () => {

    const [roomInfo, setRoomInfo] = useState([]);
    const getRoomInfo = async () => {
        await axios.get("http://localhost:3001/room").then((response) => {
            setRoomInfo(response.data)
        }
        )
    }

    useEffect(() => {
        getRoomInfo();
    }, [])

    return (
        <div className="container text-start pb-5 pt-3 bg-body">
            <div>
                <img src='\images\location.png' style={{ width: "10px" }} alt="location" />
                &nbsp;{roomInfo.meetingLoc}<br /> {/*모임 장소*/}
                {roomInfo.meetingDate} {/*모임 날짜*/}
            </div>
            <h4 id="titleTag">{roomInfo.title}</h4> {/* 글 제목 */}
            <hr />
            <p>
                <img src='\images\like.png' style={{ width: "15px" }} alt="like button" />
                &nbsp;{roomInfo.roomLikes} {/* 좋아요 개수 */}
                <img src='\images\wordBalloon.png' style={{ width: "15px" }} alt="comment" />
                &nbsp;댓글 개수 나타내기 {/* 댓글 개수 */}
            </p>
            <p>
                <img src={roomInfo.roomThumbnail} className="img-fluid" alt="room description" />
            </p>
            <div className="row">
                <h3 className="col-lg-2" style={{ minWidth: "170px" }}>
                    어떤 모임<br />인가요?
                </h3>
                <div className="col-lg-9" style={{ minWidth: "500px", maxWidth: "870px" }}>
                    <p>
                        {roomInfo.description} {/* 상세 설명 */}
                    </p>
                    <div class="floatLeft">
                        {hashTagList.map((value, index) => {
                            return (
                                <span class="text-primary"># {value.hashTag} </span>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default RoomArticle;