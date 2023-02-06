import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
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

          {/* navigation Semantic button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* navigation List */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Rooms">
                  Room
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  MyRoom
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  MyTag
                </NavLink>
              </li>
              {/* Login about List */}
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">
                  Sign-in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Sign-up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
