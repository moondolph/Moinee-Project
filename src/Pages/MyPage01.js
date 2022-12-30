import RoomShortForm from "../components/RoomShortForm";

export default function MyPage01() {
    return (
        <div >
            <div>
                <div>
                    {/* 별점 */}
                    <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-512.png"></img>
                    {/* 정보변경 */}
                    <img src="https://cdn0.iconfinder.com/data/icons/basic-outline/64/icon-basic-set_10-information-128.png"></img>
                </div>
            <hr></hr>
                <div className="Page Room Container">
                    <RoomShortForm />
                </div>
            <h6> 내가 만든 방이 없습니다. </h6>
            <hr></hr>
                <div className="Page Room Container">
                    <RoomShortForm />
                </div>
            <h6> 내가 가입한 방이 없습니다. </h6>
            </div>

        </div>
    );
}