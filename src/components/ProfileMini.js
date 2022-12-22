import { Link } from "react-router-dom";

const ProfileMini = () => {
  return (
    <div>
      <div className="container profile-size">
        {/* image */}
        <div className="mb-3">
          <Link to="#">
            <img
              className="me-3 rounded-circle"
              alt="profile"
              src="https://w.namu.la/s/521343777070adc467a42b068a5afe7b58487b50367103d3d0371edd952f51a70855d917201401e8a8eb021b1d83b03ee5a48722b5f7cf07e6f2aa8749562689ce8c0cf3d4bc0b64e9894218b8f018dc"
              width="50px"
              height="50px"
            />
          </Link>

          {/* Nickname */}
          <span>
            <Link className="profile-text">PolarBearInKyonggi</Link>
          </span>
        </div>

        {/* profile Button */}
        <div>
          <Link className="btn btn-primary rounded-pill" to="#">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMini;
