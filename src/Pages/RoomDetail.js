import SideBarRoom from "../components/SideBarRoom";
import RoomArticle from "../components/RoomArticle";
import RoomComment from "../components/RoomComment";
import RoomJoinButton from "../components/RoomJoinButton";
import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";


// 주소 : /Rooms/RoomDetail
export default function RoomDetail() {
    //SimpleRoomParticipants에서 데이터 받아오기

    const location = useLocation();
    const room = location.state.roomDetail;


    // 방 정보 불러오기(axios 테스트용)
    // const [room, setRoom] = useState([]);
    // const getRoom = async () => {
    //     await axios.get("http://localhost:3001/room").then((response) => {
    //         setRoom(response.data)
    //     }). catch(e=>{
    //         console.log(e)
    //     })
    // }

    // useEffect(()=>{getRoom();}, [])

    return (
        <table>
            <tr>
                <td style={{ "minWidth": "200px" }}>
                    <SideBarRoom room={room}/>
                </td>
                <td class="p-5 pb-0" style={{ "maxWidth": "1200px"}}>
                    <RoomArticle room={room}/>
                    <RoomComment room={room}/>
                    <RoomJoinButton room={room}/>
                </td>
            </tr>
        </table>
    );
}