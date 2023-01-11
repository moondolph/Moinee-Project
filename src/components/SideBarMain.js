import { Link } from "react-router-dom";

const SideBarMain = () => {
    return (
        <ul className="container list-group list-group-flush pe-0">
            <Link className="list-group-item list-group-item-action" to="/Rooms/RoomRanking">RoomRanking</Link>
            <Link className="list-group-item list-group-item-action" to="#">Sports/Activity</Link>
            <Link className="list-group-item list-group-item-action" to="#">Trip/Going Out</Link>
            <Link className="list-group-item list-group-item-action" to="#">Study Groups</Link>
            <Link className="list-group-item list-group-item-action" to="#">Flashmob</Link>
        </ul>

    );
};

export default SideBarMain;
