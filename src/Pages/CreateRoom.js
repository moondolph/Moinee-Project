import React, { useEffect, useState } from 'react'


export default function CreateRoom() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
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


  return (
    <div className="page">
      <input type="file"></input>
      <div className="titleWrap">
        방 생성
      </div>
      
      <div className="contentWrap">

        <div className="inputTitle">제목</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="제목을 입력하세요"
            value={email}
            onChange={handleEmail} />
        </div>

        <div className="inputTitle">태그</div>
        <div className="inputWrap">
          <input
            className="input"
            type="radio" />
          <input className="input" type="radio" />
          <input className="input" type="radio" />
          <input className="input" type="radio" />
          <input className="input" type="radio" />
          <input className="input" type="radio" />
        </div>

        <div className="inputTitle">모임날짜</div>
        <div className="inputWrap">
          <input
            className="date"
            type="date"
            />
        </div>

        <div className="inputTitle">장소</div>
        <div className="inputWrap">
          <input
            className="location"
            type="text"
            placeholder="장소를 입력하세요"
            value={email}
            onChange={handleEmail} />
        </div>

        <div className="inputTitle">제한인원</div>
        <div className="inputWrap">
          <select  className="capacity">
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10명이상</option>
          </select>
        </div>

        <div className="inputTitle">내용</div>
        <div className="inputWrap">
          <input style={{height:"200px"}}
            className="input"
            type="text"
            placeholder="모임 설명" />
        </div>
      </div>

      <div>
        <button disabled={notAllow} className="bottomButton">확인</button>
      </div>

    </div>
  );
}