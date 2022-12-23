import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <ul class="nav flex-column">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="#">Sports/Activity</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">Trip/Going Out</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">Study Groups</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">Flashmob</Link>
            </li>
        </ul>

    );
};

export default SideBar;
