// 메인 화면에 뜨는 방들을 구현한 페이지 입니다.

const MainContents = () => {
    return (
        <div class="container border border-1 mainContentMaxWidth">
            <br/>
            <p>
                <span class="position-relative">
                    <img
                        src='images\grayBox.png'
                        class="unifyContentPicture"
                        alt="room preview"
                    />
                    {/* 좋아요 배지 */}
                    <span class="position-absolute top-90 start-100 translate-middle badge rounded-pill text-bg-light">
                        <img src='images\likeNotPushed.png' style={{width:"15px"}}/>
                        {/* 좋아요 개수 */}&nbsp;36
                    </span>
                </span>
            </p>
                <h6 class="text-start">방제목제목제목</h6>
            <div class="justifySpaceBetween">
                <span class="text-primary">무료</span><span>9.28(수) ~ 12.31(토)</span>
            </div>
        </div>
    );
};

export default MainContents;