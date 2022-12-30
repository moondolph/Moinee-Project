// 메인 화면에 있는 콘텐츠에 커서를 올렸을 때 표시되는 창의
// 오른쪽 위에 위치하는 설명부분입니다.
const SimpleRoomText = () => {
    return (
	<div className="container text-start">
       <h4>간략제목</h4>
       <p>
            간략내용내용내용내용내용내용내용내용내용내용
            내용내용내용내용내용내용내용내용내용내용내용
        </p>
        <div>해시태그 추가하기</div>
        <div>모임기간 2022.12.21 (수) 13:30 ~ 18:00</div>
        <div className="text-primary">모임장소 장소가 없는 온라인 모임입니다.</div>
    </div>
    );
};

export default SimpleRoomText;