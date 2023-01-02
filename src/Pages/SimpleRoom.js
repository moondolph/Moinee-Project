import SimpleRoomPicture from '../components/SimpleRoomPicture'
import SimpleRoomText from '../components/SimpleRoomText'
import SimpleRoomParticipants from '../components/SimpleRoomParticipants'
import ProfileMini from '../components/ProfileMini';

const SimpleRoom = () => {
    return (
            <div className="container border border-3 p-3 bg-info bg-opacity-50">
                <div className="row g-3">
                    <div className="col-4">
                        <SimpleRoomPicture />
                    </div>
                    <div className="col-8">
                        <SimpleRoomText />
                    </div>
                    <div className="col-4">
                        <ProfileMini/>
                    </div>
                    <div className="col-8">
                        <SimpleRoomParticipants />
                    </div>
                </div>
            </div>
    );
};
export default SimpleRoom;