import SideBarRoom from "../components/SideBarRoom";
import RoomArticle from "../components/RoomArticle";
import RoomComment from "../components/RoomComment";
import RoomJoinButton from "../components/RoomJoinButton"; 

export default function RoomDetail() {
    return(
        <table>
            <tr>
                <td style={{"width":"200px"}}>
                    <SideBarRoom/>
                </td>
                <td class="p-5 pb-0">
                    <RoomArticle/>
                    <RoomComment/>
                    <RoomJoinButton/>
                </td>
            </tr>
        </table>
    );
}