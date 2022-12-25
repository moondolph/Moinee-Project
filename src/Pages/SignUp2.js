
const User = {
  id: 'test@example.com',
  pw: 'test2323@@@'
}

export default function SignUp2() {
  return (
    <div className="page">
      
      <div className="titleWrap">
        회원가입
      </div>

      <form>
      
        <div className="contentWrap">
          <div className="inputTitle">생년월일</div>
          <div className="inputWrap">
            <input className="date" type="date"/>
          </div>


          <div className="inputTitle">관심사</div>
          <div className="inputWrap">
            <span className="interest">운동<input type="checkbox"/></span>
            <span className="interest">여행<input type="checkbox"/></span>
            <span className="interest">독서<input type="checkbox"/></span>
            <span className="interest">음악<input type="checkbox"/></span>
            <span className="interest">게임<input type="checkbox"/></span>
            <span className="interest">영화<input type="checkbox"/></span>
            <span className="interest">음식<input type="checkbox"/></span>
          </div>

          <div className="inputTitle">성별</div>
          <div className="inputWrap">
            <select className="gender">
              <option>남</option>
              <option>여</option>
            </select>
          </div>

          <div className="inputTitle">이메일</div>
          <div className="inputWrap"><input className="input" type="email"/></div>

          <div className="inputTitle">주소</div>
          <div className="inputWrap"><input className="input" type="text"/></div>

      </div>

      <div>
        <button  className="bottomButton">
          이전
        </button>
        <button  className="bottomButton">
          확인
        </button>
      </div>
      </form>
    </div>
  );
}