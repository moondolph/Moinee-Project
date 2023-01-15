import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

  
export default function Login() {

const [cookies, setCookie] = useCookies(['iDinfo']);
const navigate = useNavigate();
const [id, setId] = useState('');
const [pw, setPw] = useState('');
const [accessToken, SetAccessToken] =useState('');


  // const accessToken = '1234';
  // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;


  // 아이디와 비밀번호를 서버에 보내면, 
  // 서버에서는 response.data 에 token을 넣어서 보내주는 구조인것 같다.

  const login = async(event)=> {
    // event.preventDefault();
    <meta name="referrer" content="no-referrer-when-downgrade" />
    await axios.post('http://34.68.3.131:8000/user/login',{
          "userId" : "abeathem1e",
          "encryptedPwd" : "uk46Fg"
      },{
        withCredentials: true,
        headers: {
          "Access-Controll-Allow-Origin" : "*",
          "Content-Type": "application/json",
        },
      }).then((response) => {
        const text = response.data.split(' ')
        console.log(text[0])
        console.log(text[1])
        
        axios.defaults.headers.common['Authorization'] = text[0]

        setCookie('iDinfo', {userId : text[1], accesstoken : text[0]}, {
          maxAge : 3600,
        });
        // setCookie('accesstoken', text[0], {
        //   maxAge : 180,
        // });
        alert("반갑습니다," + text[1] + "님.")
        navigate('/');
      }).catch((err) => {
        console.log('잘못된 입력 방식입니다.')
        console.log(err.message)
      })
    

    // axios
    // .post('/users/login', {
    //   id: id,
    //   pw: pw,
    // })
    // .then((res)=>{
    //   console.log(res)
    //   setCookie('id', res.data.token);
    // })
    // .catch((error)=>{
    //   console.log(error);
    //   alert("로그인 실패");
    // });
  };
  

  
  /* 기능박는부분. 아직 공부 안된 상태고. 아직 안 써서 주석처리 
  
    const User = {
      id: 'test@example.com',
      pw: 'test2323@@@'
    }



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
              value={id}
              onChange={(e)=>{
                setId(e.target.value);
              }}
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
              value={pw}
              onChange={(e)=>{
                setPw(e.target.value);
              }}
            />
          </div>
          


          <div className="loginOptionWrap">
            <span><NavLink className="nav-link" to="/Users/SignUp">&nbsp;&nbsp;회원가입&nbsp;&nbsp;</NavLink></span>
            <span><NavLink className="nav-link" to="#">&nbsp;&nbsp;아이디찾기&nbsp;&nbsp;</NavLink></span>
            <span><NavLink className="nav-link" to="#">&nbsp;&nbsp;비밀번호찾기&nbsp;&nbsp;</NavLink></span>
          </div>

        </div>
        <div className="mt-5">
          <button className="bottomButton" onClick={login}>
            확인
          </button>
        </div>
      </div>
    );
}