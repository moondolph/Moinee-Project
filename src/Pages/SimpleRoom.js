import SimpleRoomPicture from '../components/SimpleRoomPicture'
import SimpleRoomText from '../components/SimpleRoomText'
import SimpleRoomParticipants from '../components/SimpleRoomParticipants'
import ProfileMini from '../components/ProfileMini';

const SimpleRoom = () => {
    return (
        <div className="container bg-white simpleRoomSize">
            <table className="">
                <tr className="">
                    <td className="pt-5">
                        <SimpleRoomPicture />
                    </td>
                    <td className="pe-5">
                        <SimpleRoomText />
                    </td>
                </tr>
                <tr className="">
                    <td className="">
                        <ProfileMini />
                    </td>
                    <td className="pe-5">
                        <SimpleRoomParticipants />
                    </td>
                </tr>
            </table>
        </div>
    );
};
export default SimpleRoom;