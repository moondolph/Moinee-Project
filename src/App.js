import "./App.css";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Routers from "./Routers/Routers";
import SideBarRoom from "./components/SideBarRoom";
import RoomComment from "./components/RoomComment";
import SimpleRoomParticipants from "./components/SimpleRoomParticipants";
import SimpleRoomPicture from "./components/SimpleRoomPicture";
import SimpleRoomText from "./components/SimpleRoomText";
import MainContents from "./components/MainContents";
import RoomJoinButton from "./components/RoomJoinButton";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SignUp2 from "./Pages/SignUp2";
import MyPage01 from "./Pages/MyPage01";
import CreateRoom from "./Pages/CreateRoom";
import MyPage2 from "./components/MyPage2";
import Profile02 from "./Pages/Profile02";
function App() {
  return (
    <div className="App py-3">
      <div className="mb-10"><NavBar/></div>
      <div className="mt-5 pt-5">
        <Routes >
          <Route path="/*" element={<Routers />} />
        </Routes>
        </div>
        <div className="mt-3 width-100"><Footer /></div>
      
      {/* <NavigationBar /> */}
      {/* <NavBar /> */}
      {/* <Profile /> */}
      {/* <ProfileMini /> */}
      {/* <SortList /> */}

      {/* 주용 로그인 페이지 시작 */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <SignUp2/> */}
      {/* <CreateRoom /> */}
      {/* { <MyPage2 />  } */}
      {/* 주용 로그인 페이지 끝 */}

      {/* <Pagination /> */}
      {/* <Footer /> */}

      {/* HansooComponents*/}
      {/* <SideBarMain /> */}
      {/* <SideBarRoom /> 
      <RoomArticle /> */}
      {/* <RoomComment /> */}
      {/* <JoinRoomButton /> */}
      {/* <SimpleRoomPicture /> */}
       {/* <SimpleRoomText /> */}
      {/* <SimpleRoomParticipants /> */}
      
      {/* <MainContents /> */}

      {/* <MyPage01/> */}
      <Profile02/>
    </div>
  );
}

export default App;
