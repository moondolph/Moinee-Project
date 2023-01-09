import axios from "axios";
import { useEffect, useState } from "react";

const RoomComment = () => {

    // 방에 달린 댓글 불러오기
    const [comments, setComments] = useState([]);
    const getComments = async () => {
        await axios.get("http://localhost:3001/comments").then((response) => {
            setComments(response.data)
        })
    }
    useEffect(() => {
        getComments();
    }, [])
    
    ////////////// 댓글 작성하기 
    // 댓글 서버로 보내야 할 유저 아이디와 방 아이디는 주어진 상황이다.
    const userId = "로그인유저";
    const roomId = 30;

    // 댓글 서버로 보낼 현재 시간 생성하기
    const getNow = ()=> {
        let today = new Date();
        setCreatedAt(
            today.getFullYear() + '-' + 
            ( (today.getMonth()+1) < 9 ? "0" + (today.getMonth()+1) : (today.getMonth()+1) ) + '-' 
            + ( (today.getDate()) < 9 ? "0" + (today.getDate()) : (today.getDate()) )
        )
    }

    // id를 지정하기 위해 랜덤 숫자 뽑기
    const makeRandomNum = ()=>{
        let randomNum = Math.floor(Math.random() * 100000 + 1);
        //Math.random 0~1 사이의 난수 생성
        //Math.floor 소수점을 내림시켜 정수로 만듦
        setCreatedAt(randomNum);
    }

    // 댓글 내용 저장할 함수
    const [commentId, setCommentId] = useState(); //렌더링되는 상태값을 저장했다가 나중에 사용. name을 리턴부분에서 사용하고 set하겠다. ""는 초기값("":빈 값)
    // const [userId, setUserId] = useState(""); 
    // const [roomId, setRoomId] = useState(""); 
    const [content, setContent] = useState(""); 
    const [createdAt, setCreatedAt] = useState(""); 
    const writeComment = ()=> {
        getNow();
        makeRandomNum();
        axios.post('http://localhost:3001/comments', {
            commentId : commentId,
            userId : userId,
            roomId : roomId,
            content : content,
            createdAt : createdAt
        }).then(response => {
            alert('댓글이 등록되었습니다.');
        }).catch(error => {
            console.log('error: ', error.response);
        })
    }


    return (
        <div className="container bg-body">
            <div className="fs-3 mb-3 ps-3 text-start">모임이 궁금하다면 댓글을 남겨보세요</div>

            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-9">
                    <div className="row">
                        {/* 여기부터 댓글 */}
                        {comments.map((comment, index) => {
                            return (
                                <span>
                                    <div className="col-3" style={{ width: "50px", marginRight: "15px" }}>
                                        <img
                                            src='\images\profilePicture.png'
                                            className="unifyProfilePicture"
                                            alt="comment writer"
                                        />
                                    </div>
                                    <div className="col text-start">
                                        <p>
                                            <div className="fs-5" style={{ paddingRight: "5px" }}>{comment.userId}</div>
                                            {comment.createdAt}
                                        </p>
                                        <p> {comment.content}
                                        </p>
                                    </div>
                                </span>
                            )
                        })}
                    </div>
                </div>
                <hr />
                <div className="commentSection">
                    <textarea 
                        placeholder="댓글 입력"
                        value={content}
                        onChange={(event)=>{
                            setContent(event.target.value);
                        }} 
                        className="centerAlign mt-2 commentInput" />
                    <div>
                        <button 
                            className="btn btn-primary mt-3 centerAlign" 
                            onClick={()=>writeComment()}>
                                댓글 작성하기
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default RoomComment;