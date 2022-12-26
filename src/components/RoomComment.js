const RoomComment = () => {
    return (
        <div class="container">
            <div class="fs-3 text-start">모임이 궁금하다면 댓글을 남겨보세요</div>
            <div class="row">
                <div class="col-2">
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-3" style={{width:"50px"}}>
                            <img
                                src='images\profilePicture.png'
                                class="unifyProfilePicture"
                                alt="room preview" 
                            />
                        </div>
                        <div class="col text-start">
                            <p>
                                <div class="fs-5">김한수</div>
                                2022-08-21 22:42:30
                            </p>
                            <p> 댓글내용댓글내용댓글내용댓글내용댓글내용
                                댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
                            </p>
                            <div><img src='images\like.png' style={{width:"15px"}} alt="like button" />
                            &nbsp;3 {/* 댓글 좋아요 개수 */}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default RoomComment;