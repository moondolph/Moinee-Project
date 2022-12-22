import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const List = styled.li`
  float: left;
  margin: 0 30px;
`;

const NavBar = () => {
  return (
    <div>
      {/* Navgiation */}
      <nav className="navbar bg-gray">
        <div className="container-fluid">
          {/* Home button */}
          <Link className="navbar-brand site-Title" to="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/151/151864.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            MO-INEE
          </Link>

          {/* Search Bar */}
          <form className="d-flex" role="search">
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
        </div>
      </nav>

      {/* navigation List */}
      <div>
        <Ul className="justify-content-between">
          <List className="nav-item">
            <NavLink className="nav-link" to="#">
              Room
            </NavLink>
          </List>
          <List className="nav-item">
            <NavLink className="nav-link" to="#">
              about
            </NavLink>
          </List>
          <List className="nav-item">
            <NavLink className="nav-link" to="#">
              MyRoom
            </NavLink>
          </List>
          <List className="nav-item">
            <NavLink className="nav-link" to="#">
              MyTag
            </NavLink>
          </List>
          {/* Login about List */}
          <List className="nav-item">
            <NavLink className="nav-link" to="#">
              Login
            </NavLink>
          </List>
          <List className="nav-item">
            <NavLink className="nav-link" to="#">
              Sign-up
            </NavLink>
          </List>
        </Ul>
      </div>
    </div>
  );
};

export default NavBar;
