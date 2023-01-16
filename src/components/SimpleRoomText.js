// 메인 화면에 있는 콘텐츠에 커서를 올렸을 때 표시되는 창의
// 오른쪽 위에 위치하는 설명부분입니다.
const SimpleRoomText = (props) => {
    return (
	<div className="container text-start">
       <h4>{props.room.title}</h4>
       <p>
            {props.room.description}
        </p>
        <div>
            { props.room.roomHashTagList !== null ?
                props.room.roomHashTagList.map((hashTag, index) => {
                    return (
                        <span class="text-primary"># {hashTag.hashTag} </span>
                    )
                }) 
                :null
            }
        </div>
        <div>모임시간 {props.room.meetingDate}</div>
        <div className="text-primary">{props.room.meetingLoc}</div>
    </div>
    );
};

export default SimpleRoomText;