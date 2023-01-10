import './App.css';
import axios from 'axios';

function App() {
     
  //------------------------------User---------------------------------------------
  const {User} = require("./Data/User");
  const testUser = () => {
    console.log(User)
    };

  //---------------------------------------------------------------------------------------

  
  //------------------------------Room---------------------------------------------
  const {Room} = require("./Data/Room");
  const testRoom = () => {
    console.log(Room)
    };

  //---------------------------------------------------------------------------------------

  //------------------------------UserFavorite---------------------------------------------
  const {UserFav} = require("./Data/UserFavorite");
  const testuserFav = () => {
    console.log(UserFav)
    };

  //---------------------------------------------------------------------------------------
 
 //------------------------------User_Room_Tag---------------------------------------------
 const UserRoomTag = require("./Data/UserRoomTag");
 const testUserRoomTag = () => {
   console.log(UserRoomTag)
   };

 //---------------------------------------------------------------------------------------
 
 //------------------------------User_Follow_Tag---------------------------------------------
 const UserFollowTag = require("./Data/UserFollwTag");
 const testUserFollowTag = () => {
   console.log(UserFollowTag)
   };

 //---------------------------------------------------------------------------------------
  
  //------------------------------Enter---------------------------------------------
  const Enter = require("./Data/Enter");
  const testEnter = () => {
    console.log(Enter)
    };
 
  //---------------------------------------------------------------------------------------
 //------------------------------Evaluation---------------------------------------------
 const Evaluation = require("./Data/Evaluation");
 const testEvaluation = () => {
   console.log(Evaluation)
   };

 //---------------------------------------------------------------------------------------
 //------------------------------Room_Hash_Tag---------------------------------------------
 const RoomHashTag = require("./Data/RoomHashTag");
 const testRoomHashTag = () => {
   console.log(RoomHashTag)
   };

 //---------------------------------------------------------------------------------------
 //------------------------------Comment---------------------------------------------
 const comments = require("./Data/comments");
 const testComment = () => {
   console.log(comments)
   };

 //---------------------------------------------------------------------------------------


 //------------------------------User db insert--------------------------------------
  const UserInsert = () => {
    
    User.forEach((arr) => {
      <meta name="referrer" content="no-referrer-when-downgrade" />
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
      
        Room.forEach((arr) => {    
          <meta name="referrer" content="no-referrer-when-downgrade" />
        //  axios.defaults.withCredentials = true;
        //console.log(arr);
        // setTimeout(() =>{
        //console.log(typeof arr.createDate)
          axios
            .post("http://127.0.0.1:8000/socialRoom/", arr, {
              headers: {
                "Access-Controll-Allow-Origin" : "*",
                withCredentials: true,
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data);
            })
          .catch((error) => console.log(error.message))
          },10);
    }
//----------------------------------------------------------------------------------
  //------------------------------UserFavorite db insert--------------------------------------
      const UserFavoriteInsert = () => {
        
        UserFav.forEach((arr) => {
          <meta name="referrer" content="no-referrer-when-downgrade" />
          //setTimeout(() =>{
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
          })
        };
      
    //--------------------------------------------------------------------------------------------
    //------------------------------UserRoomTag db insert--------------------------------------
  const UserRoomTagInsert = () => {
    
    UserRoomTag.forEach((arr) => {
      <meta name="referrer" content="no-referrer-when-downgrade" />
      //setTimeout(() =>{
      axios
        .post(`http://127.0.0.1:8808/user/${arr.userid}/user_room_tag/`, arr, {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
      .catch((error) => console.log(error.message))
      })
    };
  
    //--------------------------------------------------------------------------------------------

    //------------------------------UserFollowTag db insert--------------------------------------
  const UserFollowInsert = () => {
    
    UserFollowTag.forEach((arr) => {
      <meta name="referrer" content="no-referrer-when-downgrade" />
      //setTimeout(() =>{
      axios
        .post(`http://127.0.0.1:8808/user/${arr.userId}/user_follow_tag`, arr, {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
      .catch((error) => console.log(error.message))
      })
    };
  
    //--------------------------------------------------------------------------------------------
//------------------------------Enter db insert--------------------------------------
  const EnterInsert = () => {
      
    Enter.forEach((arr) => {
      <meta name="referrer" content="no-referrer-when-downgrade" />
      setTimeout(() =>{
      axios
        .post(`http://127.0.0.1:8808/user/${arr.userId}/enter`, arr, {
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

  //------------------------------Evaluation db insert--------------------------------------
  const EvaluationInsert = () => {
      
    Evaluation.forEach((arr) => {
      <meta name="referrer" content="no-referrer-when-downgrade" />
      //setTimeout(() =>{
      axios
        .post("http://127.0.0.1:8808/userEvaluation/", arr, {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
      .catch((error) => console.log(error.message))
      })
    };

  //--------------------------------------------------------------------------------------------
 //------------------------------Room_Hash_Tag db insert--------------------------------------
 const RoomHashTagInsert = () => {
      
  RoomHashTag.forEach((arr) => {
    <meta name="referrer" content="no-referrer-when-downgrade" />
    //setTimeout(() =>{
    axios
      .post(`http://127.0.0.1:8808/socialRoom/${arr.roomId}/enter`, arr, {
        headers: {
          withCredentials: true,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
    .catch((error) => console.log(error.message))
    })
  };

//--------------------------------------------------------------------------------------------
  //------------------------------Comment db insert--------------------------------------
  const CommentInsert = () => {

    Comment.forEach((arr) => {
      <meta name="referrer" content="no-referrer-when-downgrade" />
      setTimeout(() =>{
      axios
        .post(`http://127.0.0.1:8808/socialRoom/${arr.roomId}/comment`, arr, {
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
        {/* -------------------------UserFavorite-------------------------- */}
        <div>
        <h1>UserFavorite Insert</h1>
        <button onClick={testuserFav}>check</button>
        <button onClick={UserFavoriteInsert}>button</button>
        </div>
        {/* -------------------------UserRoomTag-------------------------- */}
        <div>
        <h1>UserRoomTag Insert</h1>
        <button onClick={testUserRoomTag}>check</button>
        <button onClick={UserRoomTagInsert}>button</button>
        </div>
        {/* -------------------------UserFollow-------------------------- */}
        <div>
        <h1>UserFollow Insert</h1>
        <button onClick={testUserFollowTag}>check</button>
        <button onClick={UserFollowInsert}>button</button>
        </div>
        {/* -------------------------Enter-------------------------- */}
        <div>
        <h1>Enter Insert</h1>
        <button onClick={testEnter}>check</button>
        <button onClick={EnterInsert}>button</button>
        </div>
        {/* -------------------------Evaluation-------------------------- */}
        <div>
        <h1>Evaluation Insert</h1>
        <button onClick={testEvaluation}>check</button>
        <button onClick={EvaluationInsert}>button</button>
        </div>
        {/* -------------------------RoomHashTag-------------------------- */}
        <div>
        <h1>RoomHashTag Insert</h1>
        <button onClick={testRoomHashTag}>check</button>
        <button onClick={RoomHashTagInsert}>button</button>
        </div>
        {/* -------------------------Comment-------------------------- */}
        <div>
        <h1>Commnet Insert</h1>
        <button onClick={testComment}>check</button>
        <button onClick={CommentInsert}>button</button>
        </div>
      </div>
    );
    
  }  

export default App;
