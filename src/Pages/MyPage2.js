export default function MyPage2() {
    return (
        <div className="page">
            <div className="titleWrap">
                ※프로필수정※
            </div>

            <div className="contentWrap">
                <div className="inputTitle">프로필사진</div>
                <div className="inputWrap">
                    <div id="wrapper"><div id="spinner"></div></div>
                </div>


                <div className="inputTitle">이름</div>
                <div className="inputWrap"><input className="input" placeholder="고정값" type="text" readOnly value="" /></div>

                <div className="inputTitle">생년월일</div>
                <div className="inputWrap"><input className="input" placeholder="고정값" type="text" readOnly value="" /></div>

                <div className="inputTitle">아이디</div>
                <div className="inputWrap"><input className="input" placeholder="고정값" type="text" readOnly value="" /></div>

                <div className="inputTitle">비밀번호</div>
                <div className="inputWrap"><input className="input" placeholder="비밀번호를 수정하려면 입력하세요" type="password" /></div>

                <div className="inputTitle">비밀번호확인</div>
                <div className="inputWrap"><input className="input" placeholder="비밀번호 확인" type="password" /></div>

                <div className="inputTitle">이메일</div>
                <div className="inputWrap"><input className="input" type="email" placeholder="이메일을 입력하세요" /></div>

                <div className="inputTitle">주소</div>
                <div className="inputWrap"><input className="input" placeholder="주소를 입력하세요" type="address" /></div>


                <div className="inputTitle">관심사</div>
                <div className="inputWrap">
                    <span className="interest">운동<input type="checkbox" /></span>
                    <span className="interest">여행<input type="checkbox" /></span>
                    <span className="interest">독서<input type="checkbox" /></span>
                    <span className="interest">음악<input type="checkbox" /></span>
                    <span className="interest">게임<input type="checkbox" /></span>
                    <span className="interest">영화<input type="checkbox" /></span>
                    <span className="interest">음식<input type="checkbox" /></span>
                </div>


                <div>
                    <button className="bottomButton">
                        확인
                    </button>
                    <button className="bottomButton">
                        취소
                    </button>
                </div>
            </div>

        </div>
    );
}