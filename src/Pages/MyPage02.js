
import MainContents from "../components/MainContents";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MyPage02() {
    // 유저 정보 불러오기
    const [user, setUser] = useState({});
    const [roomList, setRoomList] = useState([]);
    // 서버랑 연결할 때는, props에서 userId 꺼내서 URI 에 넣어주어야 한다.
    const getUser = async () => {
        await axios.get("http://localhost:3001/user").then((response) => {
            console.log("방 간략정보에서 방장 프로필 가져옴")
            console.log("success")
            setUser(response.data)
            setRoomList(response.data.roomList)
        }).catch((e) => {
            console.log("간략정보 방장 프로필 가져오기 에러 : " + e)
            console.log("fail");
        })
    }


    useEffect(() => {
        getUser();
        
    }, [])

    console.log(user);
    console.log(roomList);
    // 문제가 뭐였냐면, 코드를 맨 처음 읽을 때, user.roomList 는 정의되어있지 않다.
    // user 는 useState를 통해 초기값이 지정되어있으니 그러려니 하고 넘어가지만,
    // user.roomList 라는 건 뭔지 감도 못잡게 되는 것이다.
    // 그러니까 roomList 에 따로 useState를 걸어줘야, 그러려니 하고 한 번 읽을 수가 있고,
    // useEffect를 통해 두번째 읽을 때 비로소 axios도 실행하고 roomList에 값이 저장이 되는 것이다.
    
    /*
        const roomList = [];
        for(let i=0; i < user.roomList.length; i++){
            let room = user.roomList[i];
            roomList.push(
                <div key={room.roomId} className="ms-2 mb-5 width-22">
                    <MainContents room={room}/>
                </div>
            )
        }
    */

    return (
        <div style={{ background: "whitesmoke" }} class="mt-4">
            <div> 
                <div id="InfoContainer1">
                    <div>
                    {/* 별점 */}
                    <img style={{ width: '200px' }} src="https://cdn0.iconfinder.com/data/icons/twitter-23/512/166_Heart_Love_Like_Twitter-512.png"></img>
                    </div>
                    {/*프로필  */}
                    <div>
                    <Profile />
                    </div>
                    <div>
                    {/* 정보변경 */}
                    <img style={{ width: '200px' }} src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-43-512.png"></img>
                    </div>
                </div>
                <div id="InfoContainer11"> 
                    <div class="text-center mx-5">0점</div>
                    <div class="text-center mx-5">프로필</div>
                    <div class="text-center mx-5"><a href="/" class="btn btn-primary">정보 변경</a></div>
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
                                    <MainContents room={room} />
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
                                <h1>Room History</h1>
                            </div>
                            <hr />
                            {/* {user.roomList.map((room, i) => {
                                return (
                                    <div key={room.roomId} className="ms-2 mb-5 width-22">
                                        <MainContents room={room}/>
                                    </div>
                                );
                            })} */}
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}