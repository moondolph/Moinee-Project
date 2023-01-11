import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";

const RoomComment = (props) => {

    // 서버랑 연동할 때는 props 에서 userId 도 꺼내고, room 도 꺼내고 해야 함.
    const room = props.room;

    // 방에 달린 댓글 불러오는 기능
    const [comments, setComments] = useState([]);
    const getComments = useCallback(async () => {
        await axios.get(
            "http://localhost:9800/comments/10", {
            headers: {
                withCredentials: true,
                "Content-Type": "application/json",
            },
        }).then((response) => {
            console.log(response.data.comments)
            setComments(response.data.comments)
            //setComments(commentList.data);
        }).catch((e) => {
            console.log(e)
        })
    }, []);

    useEffect(() => {
        console.log(comments)
        getComments();
    }, [getComments])

    ////////////// 댓글 작성하는 기능 
    // 방 아이디는 URI로 보내고, commentID와 createdAt은 서버에서 알아서 생성해줌.
    // 결국 json으로는 userID와 content만 보내주면 된다.
    const userId = "로그인유저";

    // 댓글 내용 저장하는 함수
    const [content, setContent] = useState("");
    const onsubmit = () => {
        console.log(userId)
        console.log(content)
        axios.post('http://localhost:9800/comments/10', {
            userId: userId,
            content: content,
        }).then(response => {
            alert('댓글이 등록되었습니다.');
            console.log('success');
        }).catch(error => {
            console.log('error: ', error.response);
            console.log("post failed")
        })
    }

    // 서버에 업데이트 요청 보내기 /:roomId/:_id
    const [commentId, setCommentId] = useState("");
    const [newComment, setNewComment] = useState("");
    const updateComment = (_id) => {
        setCommentId(_id);
        axios.patch('http://localhost:9800/comments/10/' + _id, {
            _id: commentId,
            content: newComment
        }).then(response => {
            alert('댓글 수정 완료');
            console.log('update success');
        }).catch(error => {
            console.log('error: ', error.response);
            console.log('update failed')
        })
    }

    // 서버에 삭제 요청 보내기 /:roomId/:_id
    // const deleteComment = (_id) => {
    //     setCommentId(_id);
    //     axios.delete('http://localhost:9800/comments/10/' + _id).then(response => {
    //         alert('댓글 삭제 완료');
    //         console.log('delete success');
    //     }).catch(error => {
    //         console.log('error: ', error.response);
    //         console.log('delete failed')
    //     })
    // }

    let [updateMode, setUpdateMode] = useState(false)

    return (
        <div className="container bg-body">
            <div className="fs-3 mb-3 ps-3 text-start">모임이 궁금하다면 댓글을 남겨보세요</div>

            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-9">
                    <div>
                        {/* 불러온 댓글들을 맵함수를 써서 보여준다. */}
                        {comments.map((comment, index) => {

                            {/* 자기가 쓴 댓글이라면 수정, 삭제를 넣어준다. 여기서 쏘아줌 */ }
                            let myCommentSection = [];
                            if (userId === comment.userId) {
                                
                                myCommentSection.push(
                                    <>
                                        <div className={"comment" + index + " " + "profile-right"}>
                                            <span onClick={setUpdateMode(true)}>수정</span> | <span onClick={deleteComment(comment._id)}>삭제</span>
                                        </div>
                                        
                                        {/* 숨어있다가 수정하기를 누르면 나타난다. */}
                                        {updateMode ?
                                            (<div className="hidden">
                                                <textarea value={newComment} onChange={(event) => {
                                                    setNewComment(event.target.value);
                                                }} />
                                                <div>
                                                    <span onClick={() => { updateComment(comment._id); }}>등록</span> | <span>취소</span>
                                                </div>
                                            </div>) : null
                                        }
                                    </>

                                );
                            }

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
                                            <div className="left-text">
                                                {comment.createdAt.substring(0, 10) + " " + comment.createdAt.substring(11, 19)}
                                            </div>
                                        </p>
                                    </div>

                                    <div className="col text-start">

                                        {/* 불러온 댓글 내용이 담기는 곳 */}
                                        <div ref={"comment" + index}>
                                            {comment.content}

                                            {/* 로그인한 id와 댓글 작성자의 id가 같으면 여기서 수정 / 삭제 기능을 보여줌. */}
                                            {myCommentSection}
                                        </div>


                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />

                {/* 댓글 입력창. 숨어있다가 커서를 올리면 나타난다.*/}
                <div className="commentSection">
                    <textarea
                        placeholder="댓글 입력"
                        value={content}
                        onChange={(event) => {
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