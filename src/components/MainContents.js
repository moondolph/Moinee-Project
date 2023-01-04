import { NavLink } from "react-router-dom";

// 메인 화면에 뜨는 방들을 구현한 페이지 입니다.
import SimpleRoom from "../Pages/SimpleRoom";

const MainContents = () => {
    return (
        <NavLink className="nav-link" to="/Rooms/RoomDetail">
            <div className="bg-light container border border-1 mainContentMaxWidth pop-up-parent">
                <br/>
                <p>
                    <span className="position-relative">
                        <img
                            src='\images\grayBox.png'
                            className="unifyContentPicture"
                            alt="room preview"
                        />
                        {/* 좋아요 배지 */}
                        <span className="position-absolute top-90 start-100 translate-middle badge rounded-pill text-bg-light">
                            <img alt="좋아요" src='\images\likeNotPushed.png' style={{width:"15px"}}/>
                            {/* 좋아요 개수 */}&nbsp;36
                        </span>
                    </span>
                </p>
                    <h6 className="text-start">방제목제목제목</h6>
                <div className="justifySpaceBetween">
                    <span className="text-primary">무료</span><span>9.28(수) ~ 12.31(토)</span>
                </div>
                <div class="pop-up-child">
                    <SimpleRoom/>
                </div>
            </div>
        </NavLink>
    );
};

export default MainContents;