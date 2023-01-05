

const RoomComment = () => {
    return (
        <div className="container bg-body">
            <div className="fs-3 mb-3 ps-3 text-start">모임이 궁금하다면 댓글을 남겨보세요</div>

            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-3" style={{ width: "50px", marginRight: "15px" }}>
                            <img
                                src='\images\profilePicture.png'
                                className="unifyProfilePicture"
                                alt="comment writer"
                            />
                        </div>
                        <div className="col text-start">
                            <p>
                                <div className="fs-5" style={{ paddingRight: "5px" }}>김한수</div>
                                2022-08-21 22:42:30
                            </p>
                            <p> 댓글내용댓글내용댓글내용댓글내용댓글내용
                                댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
                            </p>
                            <div><img src='\images\like.png' style={{ width: "15px" }} alt="like button" />
                                &nbsp;3 {/* 댓글 좋아요 개수 */}</div>
                        </div>
                    </div>
                </div>
            <hr />
            <div className="commentSection">
                <textarea className="centerAlign mt-2 commentInput" />
                <div><button className="btn btn-primary mt-3 centerAlign">댓글 작성하기</button></div>
            </div>
            </div>
        </div>


    );
};

export default RoomComment;