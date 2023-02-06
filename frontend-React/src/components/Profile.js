import { Link } from "react-router-dom";

const Profile = ({user}) => {
  return (
    <div className="width-326">
      {/* Image */}
      <div className="container profile-size">
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
          <Link className="profile-text " to="#">
            {user.userId}
          </Link>
        </div>

        {/* info */}
        <div className="container width-226">
          <table>
            <tr>
              <th className="width-226">Email:</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <th>Name:</th>
              <td>{user.name}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
