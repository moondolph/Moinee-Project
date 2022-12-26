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

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <NavBar />
      <Profile />
      <ProfileMini />
      <SortList />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
