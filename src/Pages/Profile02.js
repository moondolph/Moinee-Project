import RoomShortForm from "../components/RoomShortForm";

export default function Profile02() {
    return (
        <div >
            <div>
                <div>
                    {/* 별점 */}
                    <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-512.png"></img>
                </div>
            <hr></hr>
                <div className="Page Room Container">
                    <RoomShortForm />
                </div>
            <h6> ㅇㅇ님이 만든 방이 없습니다. </h6>
            <hr></hr>
                <div className="Page Room Container">
                    <RoomShortForm />
                </div>
            <h6> ㅇㅇ님이 가입한 방이 없습니다. </h6>
            </div>

        </div>
    );
}