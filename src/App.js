import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ProfileMini from "./components/ProfileMini";
import Pagination from "./components/Pagination";
import SortList from "./components/SortList";
import SideBarMain from "./components/SideBarMain";
import SideBarRoom from "./components/SideBarRoom";
import RoomArticle from "./components/RoomArticle";
import RoomComment from "./components/RoomComment";
import SimpleRoomParticipants from "./components/SimpleRoomParticipants";
import SimpleRoomPicture from "./components/SimpleRoomPicture";
import SimpleRoomText from "./components/SimpleRoomText";
import MainContents from "./components/MainContents";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SignUp2 from "./Pages/SignUp2";
import CreateRoom from "./Pages/CreateRoom";
import MyPage2 from "./Pages/MyPage2";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <NavBar />
      <Profile />
      <ProfileMini />
      <SortList />

      {/* 주용 로그인 페이지 시작 */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <SignUp2/> */}
      {/* <CreateRoom /> */}
      { <MyPage2 />  }
      {/* 주용 로그인 페이지 끝 */ }
      
      <Pagination />
      <Footer />

      {/* HansooComponents
      <SideBarMain />
      <SideBarRoom />
      <RoomArticle />
      <RoomComment />
      <SimpleRoomPicture />
      <SimpleRoomText />
      <SimpleRoomParticipants />
      <MainContents />
      */}
      
      
      
      
      
    </div>
  );
}

export default App;
