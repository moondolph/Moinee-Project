import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ProfileMini from "./components/ProfileMini";
import Pagination from "./components/Pagination";
import SortList from "./components/SortList";
import SideBar from "./components/SideBar";
import RoomArticle from "./components/RoomArticle";
import RoomComment from "./components/RoomComment";
import SimpleRoomParticipants from "./components/SimpleRoomParticipants";
import SimpleRoomPicture from "./components/SimpleRoomPicture";
import SimpleRoomText from "./components/SimpleRoomText";
import MainContents from "./components/MainContents";

function App() {
  return (
    <div className="App">
      <SideBar />
      <RoomArticle />
      <RoomComment />
      <SimpleRoomPicture />
      <SimpleRoomText />
      <SimpleRoomParticipants />
      <MainContents />
    </div>
  );
}

export default App;
