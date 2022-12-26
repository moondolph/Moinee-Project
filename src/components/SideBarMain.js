import { Link } from "react-router-dom";

const SideBarMain = () => {
    return (
        <ul class="container list-group list-group-flush">
            <Link class="list-group-item list-group-item-action" to="#">Sports/Activity</Link>
            <Link class="list-group-item list-group-item-action" to="#">Trip/Going Out</Link>
            <Link class="list-group-item list-group-item-action" to="#">Study Groups</Link>
            <Link class="list-group-item list-group-item-action" to="#">Flashmob</Link>
        </ul>

    );
};

export default SideBarMain;
