import axios from "axios";
import {useCallback, useEffect, useState} from "react";
export default function MyPage2() {

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userName, setUserName] = useState("");
    const [userBirth, setUserBirth] = useState("");
    const [userInterest, setUserInterest] = useState([]);
    const [userAddress, setUserAddress] = useState("");
    const [userEmail, setUserEmail] = useState("");

    //Data 불러와서 화면에 띄워 놓기
    const data = useCallback(async() => { 
        await axios.get("http://localhost:4000/users", {
        params: {
            userId: "123"
        }
    })
        .then(function (response) {
            console.log(response.data)
            setUserId(response.data[0].userId);
            setUserPw(response.data[0].userPw);
            setUserName(response.data[0].userName);
            setUserBirth(response.data[0].userBirth);
            setUserAddress(response.data[0].userAddress);
            setUserEmail(response.data[0].userEmail);
            // return response.data;
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function () {
            // 항상 실행
        });
    })

    useEffect(() => {
        data();
    },[data])
    


    //체크박스 value 값 받아오는 함수
    const check = e => {
        //두 번 체크하면 받아오지 않게 해야 함

        //두번 째 체크했을 때
        if (userInterest.includes(e.target.value)) {
            for (var i = 0; i < userInterest.length; i++) {   //반복문 돌려서
                if (userInterest[i] == e.target.value) {       //배열에 값이 들어가있으면
                    userInterest.splice(i, 1);                  //제거해주고
                    break;  //바로 반복문 종료
                }
            }
            setUserInterest(userInterest);          //마지막에 set으로 상태저장
        }
        //처음 체크했을 때    
        else {
            userInterest.push(e.target.value); //바로 배열에 저장
            setUserInterest(userInterest);     //set으로 상태저장
        }
    }



    const update = () => {
        axios.patch("http://localhost:4000/users?userId=123", {
      userPw: userPw,
      userName: userName,
      userBirth: userBirth,
      userInterest: userInterest,
      userAddress: userAddress,
      userEmail: userEmail,
    })
        .then(function (response) {
            // respsponse
            alert("업데이트완료!");  
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function () {
            // 항상 실행
        });
    }




    return (
        <div >
            <div className="titleWrap">
                ※프로필수정※
            </div>

            <div className="contentWrap">
                <div className="inputTitle">프로필사진</div>
                <div className="inputWrap">
                    <div id="wrapper"><input type="file"></input></div>
                </div>


                <div className="inputTitle">이름</div>
                <div className="inputWrap"><input className="input" placeholder="" type="text" value={userName} onChange={(event) => {
            setUserName(event.target.value);
          }} /></div>

                <div className="inputTitle">생년월일</div>
                <div className="inputWrap"><input className="input" type="date" value={userBirth} onChange={(event) => {
            setUserBirth(event.target.value);
          }}/></div>

                <div className="inputTitle">아이디</div>
                <div className="inputWrap"><input className="input" placeholder={userId} type="text" readOnly /></div>

                <div className="inputTitle">비밀번호</div>
                <div className="inputWrap"><input className="input" placeholder="비밀번호를 수정하려면 입력하세요" type="password" value={userPw} onChange={(event) => {
                    setUserPw(event.target.value);
                }} /></div>

                <div className="inputTitle">비밀번호확인</div>
                <div className="inputWrap"><input className="input" placeholder="비밀번호 확인" type="password" /></div>

                <div className="inputTitle">이메일</div>
                <div className="inputWrap"><input className="input" type="email" placeholder="이메일을 입력하세요" value={userEmail}
                    onChange={(event) => {
                        setUserEmail(event.target.value);
                    }} /></div>

                <div className="inputTitle">주소</div>
                <div className="inputWrap"><input className="input" placeholder="주소를 입력하세요" type="address" value={userAddress}
                    onChange={(event) => {
                        setUserAddress(event.target.value);
                    }} /></div>


                <div className="inputTitle">관심사</div>
                <div className="inputWrap">
                    <span className="interest">운동<input type="checkbox" value="운동"  onChange={check} /></span>
                    <span className="interest">여행<input type="checkbox" value="여행"  onChange={check} /></span>
                    <span className="interest">독서<input type="checkbox" value="독서"  onChange={check} /></span>
                    <span className="interest">음악<input type="checkbox" value="음악"  onChange={check} /></span>
                    <span className="interest">게임<input type="checkbox" value="게임"  onChange={check} /></span>
                    <span className="interest">영화<input type="checkbox" value="영화"  onChange={check} /></span>
                    <span className="interest">음식<input type="checkbox" value="음식"  onChange={check} /></span>
                </div>


                <div>
                    <button className="bottomButton" onClick={update}>
                        🆗확인
                    </button>
                    <button className="bottomButton">
                        취소
                    </button>
                </div>
            </div>

        </div>
    );
}