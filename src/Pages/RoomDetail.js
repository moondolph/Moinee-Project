import SideBarRoom from "../components/SideBarRoom";
import RoomArticle from "../components/RoomArticle";
import RoomComment from "../components/RoomComment";
import RoomJoinButton from "../components/RoomJoinButton";
import { useEffect, useState } from "react";
import axios from "axios";

// 주소 : /Rooms/RoomDetail
export default function RoomDetail() {

    // 방 정보 불러오기
    const [room, setRoom] = useState([]);
    const getRoom = async () => {
        await axios.get("http://localhost:3001/room").then((response) => {
            setRoom(response.data)
        }). catch(e=>{
            console.log(e)
        })
    }

    useEffect(()=>{getRoom();}, [])

    return (
        <table>
            <tr>
                <td style={{ "minWidth": "200px" }}>
                    <SideBarRoom room={room}/>
                </td>
                <td class="p-5 pb-0">
                    <RoomArticle room={room}/>
                    <RoomComment room={room}/>
                    <RoomJoinButton room={room}/>
                </td>
            </tr>
        </table>
    );
}