import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const User = {
  id: 'test@example.com',
  pw: 'test2323@@@'
  }

  
export default function Login() {
  const accessToken = '1234';
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    /* 기능박는부분. 아직 공부 안된 상태고. 아직 안 써서 주석처리 
    const [id, setid] = useState('');
    const [pw, setPw] = useState('');

    const [idValid, setidValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(idValid && pwValid) {
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
      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    };
    */

    return (
      <div className="page container border border-light border-3 text-bg-info bg-opacity-50">
        <div className="titleWrap">
          로그인
        </div>

        <div className="contentWrap">
          <div className="inputTitle">아이디</div>
          <div
            className="inputWrap"
          >
            <input
              className="input"
              type="text"
              placeholder="아이디를 입력하세요"
            />
          </div>
          

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
          </div>
          


          <div className="loginOptionWrap">
            <span><NavLink className="nav-link" to="/Users/SignUp">&nbsp;&nbsp;회원가입&nbsp;&nbsp;</NavLink></span>
            <span><NavLink className="nav-link" to="#">&nbsp;&nbsp;아이디찾기&nbsp;&nbsp;</NavLink></span>
            <span><NavLink className="nav-link" to="#">&nbsp;&nbsp;비밀번호찾기&nbsp;&nbsp;</NavLink></span>
          </div>

        </div>
        <div className="mt-5">
          <button className="bottomButton" onClick={Login}>
            확인
          </button>
        </div>
      </div>
    );
}