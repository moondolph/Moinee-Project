import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// 방에 입장했을 때 왼쪽 사이드바에 보이는 참여 인원 페이지입니다.

// 서버에서 방에 참여한 인원 정보 불러오기
const SideBarRoom = ({users, host}) => {

    const [findHost, setFindHost] = useState(false);
    const [user, setuser] = useState("");
    const [userList, setUserList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [cookies] = useCookies(['iDinfo'])
    

    const author = [];
    const normalUsers = [];

    // const getUser = async () => {
    //     await axios.get(`http://34.68.3.131:8000/user/${host}`,
    //     {
    //       headers: {
    //           Authorization : `Bearer ${cookies.accesstoken}`
    //       }
    //     }
    //     ).then((response) => {
    //         console.log("방 간략정보에서 방장 프로필 가져옴");
    //         console.log(response.data);
            
    //     }).catch((e) => {   
    //         console.log("간략정보 방장 프로필 가져오기 에러 : " + e);
    //         console.log("2");
    //     })
    // }



    const renderUsers = ()=> {
        
        }
        // for(let i=0; i < users.length; i++) {
        users.map((user) => {
            console.log(user.userId)
            if (user.userId === host) {
                author.push(
                    <div className="row mb-2">
                        <div className="col-3" style={{width:"50px"}}>
                                <img
                                    src={`https://storage.googleapis.com/iljo-bucket1/${user.thumbnail}`}
                                    className="unifyProfilePicture"
                                    alt="participant"
                                    />
                        </div>
                        <div id="root" className="col fs-5">{user.userId}(방장)</div>
                    </div>
                )
            } else {
                    normalUsers.push(
                        <div className="row mb-2">
                            <div className="col-3" style={{width:"50px"}}>
                                    <img
                                        src={`https://storage.googleapis.com/iljo-bucket1/${user.thumbnail}`}
                                        className="unifyProfilePicture"
                                        alt="participant"
                                        />
                            </div>
                            <div id="root" className="col fs-5">{user.userId}</div>
                        </div>
                    )
            }
        })

    

useEffect(() =>{
    renderUsers();
},[])



    return (
        <div className="container text-start pt-3 pb-5 roomSideBar width-226" style={{minWidth:"150px", backgroundColor:"white"}}>
            <span className="h5">참여인원</span>
            <hr /><br/>
            {author}
            {normalUsers}
        </div>
    )
};

export default SideBarRoom;