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

function App() {
  return (
    <div className="App">
      <SideBar />
      <RoomArticle />
      
    </div>
  );
}

export default App;
