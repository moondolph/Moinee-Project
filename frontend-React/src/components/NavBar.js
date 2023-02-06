import { Link, NavLink, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from "react";

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const List = styled.li`
  float: left;
  margin: 0 30px;
`;

const NavBar = () => {
  
  const [cookies, setCookie, removeCookie] = useCookies(['iDinfo']);
  // console.log(cookies.iDinfo.userId)
  // const navigate = useNavigate();
  // const [userName, setUserName] = useState(`${cookies.iDinfo.userId}`)
  const logout = () => {
    removeCookie('iDinfo')
    alert("로그아웃 하였습니다.");
    // setUserName("")
  }

  // useEffect(()=>{

  // },[userName])

  return (
    <div className="z-n1 fixed-top text-bg-light">
      {/* Navgiation */}
      <nav className="navbar bg-gray stikcy-top">
        <div className="container-fluid">
          <span>
            {/* Home button */}
            <Link className="navbar-brand site-Title" to="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/151/151864.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top me-2"
              />
              MO-INEE
            </Link>

            {/* Show LoginUser and Logout */}
            {cookies.iDinfo !== undefined ?
              <>
                {cookies.iDinfo.userId}님 반갑습니다.
              </> :
              null
            }
          </span>

          {/* Search Bar and MakeRoomButton*/}
          {cookies.iDinfo !== undefined ? (
            <form className="d-flex" role="search">
              <NavLink className="nav-link" to="/Rooms/CreateRoom">
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "20px", width: "120px" }}
                >
                  모임 만들기
                </button>
              </NavLink>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <img
                    alt="request"
                    src="https://cdn-icons-png.flaticon.com/512/49/49116.png"
                    style={{ height: "20px", width: "20px" }}
                  />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Keyword"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
          ) : null}
        </div>
      </nav>

      {/* navigation List */}
      <div>
        <Ul className="justify-content-between">
          <List className="nav-item">
            <NavLink className="nav-link" to="/Rooms">
              Room
            </NavLink>
          </List>
          <List className="nav-item">
            <NavLink className="nav-link" to="/RoomRanking">
              RoomRanking
            </NavLink>
          </List>
          {cookies.iDinfo !== undefined ? (
            <List className="nav-item">
              <NavLink className="nav-link" to="/Users/MyPage02">
                MyRoom
              </NavLink>
            </List>
          ) : null}

          {cookies.iDinfo !== undefined ? (
            <List className="nav-item">
              <NavLink className="nav-link" to="/Users/MyTag">
                MyTag
              </NavLink>
            </List>
          ) : null}
          {/* Login about List */}
          {cookies.iDinfo === undefined ? (
            // 로그인 상태가 아닐 경우 보여주는 메뉴
            <>
              <List className="nav-item">
                <NavLink className="nav-link" to="/Users/Login">
                  Login
                </NavLink>
              </List>
              <List className="nav-item">
                <NavLink className="nav-link" to="Users/SignUp">
                  Sign-up
                </NavLink>
              </List>
            </>
          ) : (
            // 로그인 상태일 경우 보여주는 화면
            <>
              <List className="nav-item">
                <NavLink className="nav-link" to="Users/login" onClick={logout}>
                  Logout
                </NavLink>
              </List>
              <List className="nav-item">
                <NavLink className="nav-link" to="Users/MyPage">
                  MyPage
                </NavLink>
              </List>
            </>
          )}
        </Ul>
      </div>
    </div>
  );
};

export default NavBar;
