import React, { useEffect, useState } from 'react'

const User = {
  id: 'test@example.com',
  pw: 'test2323@@@'
}


export default function SignUp2() {
  const [id, setid] = useState('');
  const [pw, setPw] = useState('');

  const [idValid, setidValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  const handleid = (e) => {
    setid(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setidValid(true);
    } else {
      setidValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const onClickConfirmButton = () => {
    if (id === User.id && pw === User.pw) {
      alert('로그인에 성공했습니다.')
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  }

  return (
    <div className="page">
      <div className="titleWrap">
        회원가입
      </div>

      <div className="contentWrap">
        <div className="inputTitle">생년월일</div>
        <div className="inputWrap">
          <input
            className="input"
            type="date"
          />
        </div>


        <div className="inputTitle">관심사</div>
        <div className="inputWrap">
          운동<input
            className="input"
            type="radio"
          />
          여행<input
            className="input"
            type="radio"
          />
          독서<input
            className="input"
            type="radio"
          />
          음악<input
            className="input"
            type="radio"
          />
          게임<input
            className="input"
            type="radio"
          />

        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">성별</div>
        <div className="inputWrap">
          남<input
            className="input"
            type="checkbox"
          />

          여<input
            className="input"
            type="checkbox"
          />

        </div>
        










        <div style={{ marginTop: "26px" }} className="inputTitle">
          이메일
        </div>

        <div className="inputWrap">
          <input
            className="input"
            type="file"
          />
        </div>


        <div style={{ marginTop: "26px" }} className="inputTitle">
          주소
        </div>

        <div className="inputWrap">
          <input
            className="input"
            type="text"
          />
        </div>



      </div>

      <div>
        <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
          확인
        </button>
      </div>
    </div>
  );
}