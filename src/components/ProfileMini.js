import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProfileMini = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['iDinfo']);
  // 유저 정보 불러오기
  const [user, setUser] = useState([]);
  // 서버랑 연결할 때는, props에서 userId 꺼내서 URI 에 넣어주어야 한다.
  const getUser = async ()=> {
    await axios.get(`http://34.68.3.131:8000/user/${props.host}`,
    {headers: 
      {Authorization : `Bearer ${cookies.iDinfo.accesstoken}`}
    }).then(response=>{
      setUser(response.data)
    }).catch(e=>{
      console.log("간략정보 방장 프로필 가져오기 에러 : " + e)
    })
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <div>
      <div className="container profile-size">
        {/* image */}
        <div className="mb-3">
          <Link to="#">
            <img
              className="me-3 rounded-circle"
              alt="profile"
              src={`https://storage.googleapis.com/iljo-bucket1/${user.thumbnail}`}
              width="50px"
              height="50px"
            />
          </Link>

          {/* Nickname */}
          <span>
            <Link className="profile-text">{user.userId}</Link>
          </span>
        </div>

        {/* profile Button */}
        <div>
          <Link className="btn btn-primary rounded-pill" to="/Users/MyPage02" userId={user.userId}>
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMini;
