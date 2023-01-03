export default function Signup() {
  return (
    <div className="page container border border-light border-3">
      <div className="titleWrap">
        ※회원가입※
      </div>

      <div className="contentWrap">

        <div className="inputTitle">✍️이름</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="이름을 입력하세요"
          />

        </div>

        <div  className="inputTitle">🆔아이디</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="아이디를 입력하세요"
          />
        </div>

        <div  className="inputTitle">
          🅿️비밀번호
        </div>

        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
        </div>

        <div  className="inputTitle">
          ✅비밀번호확인
        </div>


        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            
          />
        </div>

        <div  className="inputTitle">
          📧이메일
        </div>

        <div className="inputWrap">
          <input
            className="input"
            type="email"
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div>
          <button className="bottomButton">
            ⏭️다음
          </button>
        </div>


      </div>

    </div>
  );
}