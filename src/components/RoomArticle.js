// room thumbnail 및 설명 부분
import axios from "axios";
import { useEffect, useState } from "react";

const RoomArticle = (props) => {

    // 해시태그 불러오기
    const [hashTags, setHashTags] = useState([]);
    const getHashTags = async () => {
        await axios.get("http://localhost:3001/hashTags").then((response)=>{
            setHashTags(response.data)
        })
    }
    
    useEffect(() => {
        getHashTags();
    }, [])

    return (
        <div className="container text-start pb-5 pt-4 ps-4 bg-body">
            <div className="text-secondary">
                <img src='\images\location.png' style={{ width: "10px" }} alt="location" />
                &nbsp;{props.room.meetingLoc}<br /> {/*모임 장소*/}
                모임 시간 {props.room.meetingDate} {/*모임 날짜*/}
            </div>
            <h1 id="titleTag">{props.room.title}</h1> {/* 글 제목 */}
            <hr />
            <p>
                <img src='\images\like.png' style={{ width: "15px" }} alt="like button" />
                &nbsp;{props.room.roomLikes} {/* 좋아요 개수 */}
                <img src='\images\wordBalloon.png' style={{ width: "15px" }} alt="comment" />
                &nbsp;댓글 개수 나타내기 {/* 댓글 개수 */}
            </p>
            <div className="text-center mt-2 mb-3">
                {/* 방 사진 */}
                <img src={props.room.roomThumbnail} className="img-fluid centerAlign roomImage" alt="room description" />
            </div>
            <div className="row">
                <h3 className="col-lg-2" style={{ minWidth: "170px" }}>
                    어떤 모임<br />인가요?
                </h3>
                <div className="col-lg-9" style={{ minWidth: "500px", maxWidth: "870px" }}>
                    <p>
                        {props.room.description} {/* 상세 설명 */}
                    </p>
                    <div class="floatLeft">
                        {hashTags.map((hashTag, index) => {
                            return (
                                <span class="text-primary"># {hashTag.hashTag} </span>
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