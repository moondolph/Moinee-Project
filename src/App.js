import './App.css';
import axios from 'axios';
function App() {

  //------------------------------User---------------------------------------------
  const User = require("./Data/User");
  const testUser = () => {
    console.log(User)
    };

  //---------------------------------------------------------------------------------------

  //------------------------------Room---------------------------------------------
  const Room = require("./Data/User");
  const testRoom = () => {
    console.log(Room)
    };

  //---------------------------------------------------------------------------------------

  //------------------------------User db insert--------------------------------------
  const UserInsert = () => {
    
    User.forEach((arr) => {
      setTimeout(() =>{
      axios
        .post("http://127.0.0.1:8808/user/", arr, {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
      .catch((error) => console.log(error.message))
      }, 10)
    });
  }
    //--------------------------------------------------------------------------------------------

    //------------------------------Room db insert-----------------------------------------------
    const RoomInsert = () => {
    
    User.forEach((arr) => {
      //  axios.defaults.withCredentials = true;
      //console.log(arr);
      // setTimeout(() =>{
      axios
        .post("http://127.0.0.1:8808/user/", arr, {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        });
      //.catch((error) => console.log(error.message))
      //}, 10)
    });
  }

    //--------------------------------------------------------------------------------------------
    return (
      <div className="App">

        {/* ------------------------User ------------------------------*/}
        <div>
        <h1>User Insert</h1>
        <button onClick={testUser}>check</button>
        <button onClick={UserInsert}>button</button>
        </div>
        {/* -------------------------Room-------------------------- */}
        <div>
        <h1>Room Insert</h1>
        <button onClick={testRoom}>check</button>
        <button onClick={RoomInsert}>button</button>
        </div>
      </div>
    );
  };
  

export default App;
