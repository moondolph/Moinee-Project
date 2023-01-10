// 메인 화면에 있는 콘텐츠에 커서를 올렸을 때 표시되는 창의
// 왼쪽 위에 위치하는 사진부분입니다.
const SimpleRoomPicture = (props) => {
    return (
	<div className="container text-center">
        <p>
            <img 
                src={props.room.roomThumbnail} 
                className="unifySimplePicture"
                alt="room preview" 
            />
        </p>
        <img src='/images\facebook.png' width={"30px"} alt="facebook" />&nbsp;
        <img src='/images\twitter.png' width={"30px"} alt="twitter" />&nbsp;
        <img src='/images\kakaostory.png' width={"30px"} alt="kakaostory" />&nbsp;
        <img src='/images\instargram.png' width={"30px"} alt="instargram" />
    </div>
    );
};

export default SimpleRoomPicture;