import SimpleRoomPicture from '../components/SimpleRoomPicture'
import SimpleRoomText from '../components/SimpleRoomText'
import SimpleRoomParticipants from '../components/SimpleRoomParticipants'
import ProfileMini from '../components/ProfileMini';

const SimpleRoom = (props) => {
    return (
        <div className="container simpleRoomSize border border-1">
            <table className="">
                <tr className="">
                    <td className="pt-5">
                        <SimpleRoomPicture room={props.room}/>
                    </td>
                    <td className="pe-5">
                        <SimpleRoomText room={props.room}/>
                    </td>
                </tr>
                <tr className="">
                    <td className="">
                        <ProfileMini host={props.room.host}/>
                    </td>
                    <td className="pe-5">
                        <SimpleRoomParticipants room={props.room}/>
                    </td>
                </tr>
            </table>
        </div>
    );
};
export default SimpleRoom;