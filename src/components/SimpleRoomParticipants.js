// 메인 화면에 있는 콘텐츠에 커서를 올렸을 때 표시되는 창의
// 오른쪽 아래에 위치하는 인원수, 요금, 입장 버튼 부분입니다.
const SimpleRoomParticipants = () => {
    return (
	<div class="border border-5 text-start">
        <h4>제목제목제목제목제목</h4>
        <hr/>
        선착순 정원500명 2022.12.20 (화) 23:59까지 481명 신청가능
        <div class="text-end">
            <button class="btn btn-primary" type="submit">입장하기</button>
            <button>좋아요버튼</button>
        </div>
    </div>
    );
};

export default SimpleRoomParticipants;