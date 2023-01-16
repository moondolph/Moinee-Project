import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const TagUsersProfile = (props) => {
  const [cookies] = useCookies(['iDinfo'])

  // console.log(props)
 const [userinfo, setUserInfo] = useState({})
  const getUser = async () => {
    await axios.get(`http://34.68.3.131:8000/user/${cookies.iDinfo.userId}/`,{
      headers: {
          Authorization : `Bearer ${cookies.iDinfo.accesstoken}`
      }
    }).then((response) => {
        // console.log("방 간략정보에서 방장 프로필 가져옴");
        // console.log(response);
        setUserInfo(response.data);
        
  }
    ).catch((e) =>{
        console.log("간략정보 방장 프로필 가져오기 에러 : " + e)
        console.log("2");
  })
}

useEffect(() => {
  getUser();
},[])


  return (
      <div className="container profile-size">
        {/* <div className="mb-3">
          <div className="mt-3" style={{width : '180px'}}>
            <img
              className="rounded-circle"
              alt="profile"
              src={`https://storage.googleapis.com/${user.thumbnail}`}
              width="100px"
              height="100px"
            />
          </div>
          <div style={{width : '180px'}}>
            {user.userId}
          </div>
        </div> */}
        {/* <div className="container">
          <table>
            <tr>
              <th>Email :</th>
              <td>xxxxxx@gmail.com</td>
            </tr>
            <tr>
              <th>Phone :</th>
              <td>xxx-xxxx-xxxx</td>
            </tr>
            <tr>
              <th>Name :</th>
              <td>SungHwan</td>
            </tr>
          </table>
        </div> */}
      </div>
    
  );
};

export default TagUsersProfile;