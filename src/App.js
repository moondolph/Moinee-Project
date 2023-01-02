import "./App.css";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Routers from "./Routers/Routers";
import RoomArticle from "./components/RoomArticle";
import SideBarRoom from "./components/SideBarRoom";
import SimpleRoomText from  "./components/SimpleRoomText";
import MainContents from  "./components/MainContents";
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
    </div>
  );
}

export default App;
