
import MainContents from "../components/MainContents";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function MyPage02() {

    const [cookies, setCookie, removeCookie] = useCookies(['iDinfo']);
    const navigate = useNavigate();
  
    // 로그인 상태인지 확인 후 아니라면 메인화면으로 돌려보낸다.
    // 또는 쿠키가 만료되어도 돌려보낸다.
    const goBack = () => {
      alert("로그인 후 이용 바랍니다.");
      navigate('/');
    }
  
    const loginCheck = ()=>{
      if (cookies.id === undefined) {
        goBack();
      }
      };
      useEffect(()=>{
          loginCheck();
      });  



    // 유저 정보 불러오기
    const [user, setUser] = useState({});
    const [roomList, setRoomList] = useState([]);
    const [evaluation, setEvaluation] = useState(0);
    // 서버랑 연결할 때는, props에서 userId 꺼내서 URI에 넣어주어야 한다.
    const getUser = async () => {

        await axios.get(`http://34.68.3.131:8000/user/${cookies.iDinfo.userId}`,
        {
            headers: {
                Authorization : `Bearer ${cookies.iDinfo.accesstoken}`
            }
          }).then((response) => {
            console.log("방 간략정보에서 방장 프로필 가져옴");
            console.log(response.data);
            setUser(response.data);
            setRoomList(response.data.roomList);
        }).catch((e) => {   
            console.log("간략정보 방장 프로필 가져오기 에러 : " + e);
            console.log("2");
        })
    }
// 서버랑 연결할 때는, props에서 userId 꺼내서 URI에 넣어주어야 한다.
    const getEvaluation = async () => {
        await axios.get("http://34.68.3.131:8000/userEvaluation/").then((response) => {
            console.log("Evaluation 불러옴");
            console.log(response.data);
            let evalList = [];
            response.data.forEach((evaluation) => {
                evalList = [...evalList, evaluation.grade]
            })
            console.log(evalList)

            // console.log(evalList)
            const result = evalList.reduce(function add(sum,currValue){
                return sum + currValue;
            },0);

            const avg = result / evalList.length;
                
            setEvaluation(Math.round(avg));
        }).catch((e) => {   
            console.log("간략정보 방장 프로필 가져오기 에러 : " + e);
            console.log("2");
        })
    }

    useEffect(() => {
        getUser();
        getEvaluation();
    }, [])


    console.log(typeof (roomList));

    
    return (
        <div style={{ background: "whitesmoke" }} class="mt-4">
            <div> 
                <div id="InfoContainer1">
                    <div>
                    {/* 별점 */}
                    <img style={{ width: '130px' }} src="https://cdn0.iconfinder.com/data/icons/twitter-23/512/166_Heart_Love_Like_Twitter-512.png"></img>
                    <div class="text-center mx-5">{evaluation}</div>
                    </div>
                    {/*프로필  */}
                    <div>
                    <Profile user={user} />
                    </div>
                    <div>
                    {/* 정보변경 */}
                    <img style={{ width: '130px' }} src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-43-512.png"></img>
                    <div class="text-center mx-5"><Link to="/Users/MyPage" className="nav-link btn btn-secondary">정보 변경</Link></div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="d-flex flex-column">
                <div className="row mt-4">
                    <div className="ms-3 row">
                        <div>
                            <h1>My Room</h1>
                        </div>
                        <hr />
                        {roomList.map((room, i) => {
                            return (
                                <div key={room.roomId} className="ms-2 mb-5 width-22">
                                    <MainContents room={room} IsTag={true} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <hr></hr>

                <div className="d-flex">
                    <div className="row mt-4">
                        <div className="ms-3 row">
                            <div>
                                <h1></h1>
                            </div>
                            <hr />
                            {roomList.map((room, i) => {
                                return (
                                    <div key={room.roomId} className="ms-2 mb-5 width-22">
                                        <MainContents room={room}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}