import SideBarRoom from "../components/SideBarRoom";
import RoomArticle from "../components/RoomArticle";
import RoomComment from "../components/RoomComment";
import RoomJoinButton from "../components/RoomJoinButton";
import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import { useCookies } from "react-cookie";


// 주소 : /Rooms/RoomDetail
export default function RoomDetail() {
    const [cookies, setCookie, removeCookie] = useCookies(['iDinfo']);

    //SimpleRoomParticipants에서 방 아이디를 받아오기
    const location = useLocation();
    const roomId = location.state.roomId;

    // 방 정보 불러오기
    const [room, setRoom] = useState({});
    const [users, SetUsers] = useState([]);
    const [host, SetHost] = useState('');
    const getRoom = async () => {
        await axios.get(`http://34.68.3.131:8000/socialRoom/${roomId}`,{
            headers: {
                Authorization : `Bearer ${cookies.iDinfo.accesstoken}`
            }
          }).then((response) => {
            setRoom(response.data)
            SetUsers(response.data.userList)
            SetHost(response.data.host)
        }). catch(e=>{
            console.log(e.message)
        })
    }

    useEffect(() =>{
        getRoom()
    }, [])

    return (
        <table>
            <tr>
                <td style={{ "minWidth": "200px" }}>
                    <SideBarRoom 
                    users={users}
                    host={host}
                    />
                </td>
                <td class="p-5 pb-0" style={{ "maxWidth": "1200px"}}>
                    <RoomArticle room={room}/>
                    <RoomComment roomId={roomId}/>
                    <RoomJoinButton room={room}/>
                </td>
            </tr>
        </table>
    );
}