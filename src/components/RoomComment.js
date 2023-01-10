import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const RoomComment = () => {

    // 방에 달린 댓글 불러오기
    const [comments, setComments] = useState([]);

    ///////////////////////////////////////////////////////// 클라우드에서 불러오기 
    // const getComments = useCallback(async () => {
    //      await axios.get(
    //         // 서버를 통해 클라우드 DB에서 데이터를 불러올 수 있게 됨.
    //         "http://localhost:9800/comments", {
    //         headers: {
    //           withCredentials: true,
    //           "Content-Type": "application/json",
    //         },
    //       }).then((response) => {
    //         console.log(response.data.comments)
    //         setComments(response.data.comments)
    //         //setComments(commentList.data);
    //     }).catch((e) => {
    //         console.log(e)
    //     })
    // },[]);
    ///////////////////////////////////////////////////////// json-server에서 불러오기
    const getComments = useCallback(async () => {
         await axios.get("http://localhost:3001/comments").then((response) => {
            console.log(response.data)
            setComments(response.data)
        }).catch((e) => {
            console.log(e)
        })
    },[]);
    useEffect(() => {
        console.log(comments)
        getComments();
    }, [getComments])
    
    ////////////// 댓글 작성하기 
    // 방 아이디는 URI로 보내고, commentID와 createdAt은 서버에서 알아서 생성해줌.
    // 결국 json으로는 userID와 content만 보내주면 된다.
    const userId = "로그인유저";

    // 댓글 내용 저장하는 함수
    const [content, setContent] = useState(""); 
    const onsubmit = ()=> {
        console.log(userId)
        console.log(content)
        axios.post('http://localhost:9800/comments/10', {
            userId : userId,
            content : content,
        }).then(response => {
            alert('댓글이 등록되었습니다.');
            console.log('success');
        }).catch(error => {
            console.log('error: ', error.response);
            console.log("post failed")
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
                                            {comment.createdAt.substring(0, 10) + " " + comment.createdAt.substring(11, 19)}
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
                            onClick={onsubmit}>
                                댓글 작성하기
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default RoomComment;