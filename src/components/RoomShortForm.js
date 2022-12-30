// 마이페이지에서 생성한 방 / 가입한 방 을 보여줄 페이지입니다.

const RoomShortForm = () => {
    return (
        <div className="container border border-1 mainContentMaxWidth">
            <br/>
            <p>
                <span className="position-relative">
                    <img
                        src='images\grayBox.png'
                        className="unifyContentPicture"
                        alt="room preview"
                    />
                </span>
            </p>
                <h6 className="text-start">방제목제목제목</h6>
        </div>
    );
};

export default RoomShortForm;