import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";
import { useCookies } from "react-cookie";

const RoomComment = ({roomId}) => {
    // console.log(token);
    const [cookies, setCookie, removeCookie] = useCookies(['iDinfo']);
    
    // 방에 달린 댓글 불러오는 기능
    const [comments, setComments] = useState([]);
    const getComments = useCallback(async () => {
        <meta name="referrer" content="no-referrer-when-downgrade" />
        console.log(`요청을 어디로 보냈나요"?? http://35.226.39.213:9800/comments/${roomId}`)
        await axios.get(
            `http://35.226.39.213:9800/comments/${roomId}`,
        {    
            headers: {
                "Access-Controll-Allow-Origin" : "*",
                withCredentials: true,
                "Content-Type": "application/json",
            },
        }
        ).then((response) => {
            console.log("댓글 불러오기는 잘 되나요??")
            console.log(response.data.comments)
            setComments(response.data.comments)
            //setComments(commentList.data);
        }).catch((error) => {
            console.log(error.message)
        })
    }, []);



    ////////////// 댓글 작성하는 기능 
    // 방 아이디는 URI로 보내고, commentID와 createdAt은 서버에서 알아서 생성해줌.
    // 결국 json으로는 userID와 content만 보내주면 된다.

    // 댓글 내용 저장하는 함수
    const [content, setContent] = useState("");
    const onsubmit = useCallback(() => {
        axios.post(`http://35.226.39.213:9800/comments/${roomId}`, {
            userId: cookies.iDinfo.userId,
            content: content,
        },{
            headers: {
                Authorization: `Bearer ${cookies.iDinfo.accesstoken}`,
               withCredentials: true,
               "Content-Type": "application/json",
           },
    }
        ).then(response => {
            alert('댓글이 등록되었습니다.');
            console.log('success');
            getComments();
        }).catch(error => {
            console.log('error: ', error.message);
            console.log("post failed")
        })
    }, [getComments,content]);

    // 서버에 업데이트 요청 보내기 /:roomId/:_id
    const [commentId, setCommentId] = useState("");
    const [newComment, setNewComment] = useState("");
    const [targetComment, setTargetComment] = useState("");
    const updateComment = useCallback((_id) => {
        setCommentId(_id);
        axios.patch(`http://35.226.39.213:9800/comments/${roomId}/` + _id, {
            _id: commentId,
            content: newComment
        }).then(response => {
            alert('댓글 수정 완료');
            console.log('update success');
            getComments();
        }).catch(error => {
            console.log('error: ', error.response);
            console.log('update failed')
        })
    }, [newComment]);

    // 서버에 삭제 요청 보내기 /:roomId/:_id
    const deleteComment = useCallback((_id) => {
        setCommentId(_id);
        axios.delete(`http://35.226.39.213:9800/comments/${roomId}/` + _id).then(response => {
            alert('댓글 삭제 완료');
            console.log('delete success');
            getComments();
        }).catch(error => {
            console.log('error: ', error.response);
            console.log('delete failed')
        })
    }, []);

    let [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        
    },[updateMode, targetComment])

    // useEffect(() => {
    //     // console.log(comments)
        
    // }, [getComments])

    useEffect(() => {
        getComments();
        console.log(comments)
    }, [])

    return (
        <div className="container bg-body">
            <div className="fs-3 mb-3 ps-3 text-start">모임이 궁금하다면 댓글을 남겨보세요</div>

            <div className="row ">
                <div className="col-2">
                </div>
                <div className="col-9 pb-5" style={{maxWidth: "700px"}}>
          
                        {/* 불러온 댓글들을 맵함수를 써서 보여준다. */}
                        {comments.map((comment, index) => {
                            return (
                                <div className="mt-5">

                                    {/* 유저 프로필 사진, 아이디, 작성날짜 등이 담긴다.*/}
                                    <div>
                                        <img
                                            src='\images\profilePicture.png'
                                            className="unifyProfilePicture floatLeft me-3"
                                            alt="comment writer"
                                        />
                                        <p>
                                            <div className="fs-5 left-text" style={{ paddingRight: "5px" }}>
                                                {comment.userId}
                                            </div>
                                            <div className="left-text text-secondary">
                                                {comment.createdAt.substring(0, 10) + " " + comment.createdAt.substring(11, 19)}
                                            </div>
                                        </p>
                                    </div>

                                    <div className="col text-start">

                                        {/* 불러온 댓글 내용이 담기는 곳 */}
                                        <div>
                                            {comment.content}

                                            {/* 수정, 삭제 버튼. 댓글 작성자 id 와 내 id가 같으면 나타난다. */}
                                            {/* 수정을 누르면 사라지고, 취소를 누르면 다시 나타난다. */}
                                            {(cookies.iDinfo.userId === comment.userId) ?
                                                (updateMode === false) ? 
                                                    ( <div className="profile-right">
                                                        <span 
                                                        className="btn btn-primary me-3" 
                                                        onClick={()=>{
                                                            setTargetComment(comment._id); 
                                                            setUpdateMode(true);
                                                            setNewComment(comment.content)
                                                            }}
                                                        >
                                                            수정
                                                        </span>
                                                        <span className="btn btn-danger" onClick={() =>{deleteComment(comment._id)}}>삭제</span>
                                                    </div>)
                                                : null
                                            : null}
                                        
                                        {/* 수정할 때 입력하는 창. 숨어있다가 수정하기를 누르면 나타난다. */}
                                        {updateMode ? 
                                            ((targetComment === comment._id) ?
                                                (<div>
                                                    <textarea 
                                                        className="commentUpdateSection" 
                                                        value={newComment}
                                                        onChange={(event) => {
                                                            setNewComment(event.target.value);
                                                        }} 
                                                    />
                                                    <div className="profile-right">
                                                        <span className="btn btn-light me-1 shadow-sm bg-body-tertiary" onClick={() => {updateComment(comment._id); }}>등록</span> 
                                                        <span className="btn btn-light me-1 shadow-sm bg-body-tertiary" onClick={() => {setUpdateMode(false)}}>취소</span>
                                                    </div>
                                                </div>) 
                                            :null) 
                                        : null
                                        }
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                </div>
                <hr />

                {/* 댓글 입력창. 숨어있다가 커서를 올리면 나타난다.*/}
                <div className="commentSection">
                    <textarea
                        placeholder="댓글 입력"
                        value={content}
                        onChange={(event) => {
                            setContent(event.target.value);
                            console.log(content);
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