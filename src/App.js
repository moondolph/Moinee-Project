import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Routers from "./Routers/Routers";
import SideBarRoom from "./components/SideBarRoom";
import RoomArticle from "./components/RoomArticle";
import RoomComment from "./components/RoomComment";
import SimpleRoomParticipants from "./components/SimpleRoomParticipants";
import SimpleRoomPicture from "./components/SimpleRoomPicture";
import SimpleRoomText from "./components/SimpleRoomText";
import MainContents from "./components/MainContents";
import RoomJoinButton from "./components/RoomJoinButton";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CreateRoom from "./Pages/CreateRoom";
import MyPage2 from "./components/MyPage2";
import Profile02 from "./Pages/Profile02";
import axios from "axios";
import SimpleRoom from "./Pages/SimpleRoom";
function App() {
  return (
    <div className="App pt-3">
      <div className="mb-10"><NavBar /></div>
      <div className="pt-5">
        <Routes >
          <Route path="/*" element={<Routers />} />
        </Routes>
      </div>
      <div className="width-100"><Footer /></div>
    </div>
  );
}

export default App;
