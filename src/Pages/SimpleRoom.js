import SimpleRoomPicture from '../components/SimpleRoomPicture'
import SimpleRoomText from '../components/SimpleRoomText'
import SimpleRoomParticipants from '../components/SimpleRoomParticipants'
import ProfileMini from '../components/ProfileMini';

const SimpleRoom = () => {
    return (
            <div class="container border border-3 p-3" >
                <div class="row g-3">
                    <div class="col-4">
                        <SimpleRoomPicture />
                    </div>
                    <div class="col-8">
                        <SimpleRoomText />
                    </div>
                    <div class="col-4">
                        <ProfileMini/>
                    </div>
                    <div class="col-8">
                        <SimpleRoomParticipants />
                    </div>
                </div>
            </div>
    );
};
export default SimpleRoom;