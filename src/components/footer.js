import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* FooterTitle */}
      <div className="card mb-2 left-text">
        <div className="card-header site-Title-footer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/151/151864.png"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          MO-INEE
        </div>

        <div className="footerIntro">
          {/* Introuduce */}
          <div className="card-body footerContents">
            <h3 className="card-title">Let`s Introduce MO-INEE</h3>
            <p />
            <p />
            <p className="card-text">
              This site has opened since 2023-01-17
              <br />
              we support you have a good group about your hobby or excited
              things. groups people enjoy and join together!
              <br />
              we support you have a good group about your hobby or excited
              things. groups people enjoy and join together!
              <br />
              we support you have a good group about your hobby or excited
              things. groups people enjoy and join together!
              <br />
              we support you have a good group about your hobby or excited
              things. groups people enjoy and join together!
            </p>
          </div>

          {/* Contact Us */}
          <div className="card-body footerContents">
            <h3 className="card-title">Contact Us</h3>
            <p />
            <p />
            <p className="card-text">
              <h5>
                <b>Email</b> : xxxxxxxx@gmail.com
              </h5>
              <h5>
                <b>Phone</b> : xxxx-xxxx-xxxx-xxxx
              </h5>
              <h5>
                <b>address</b> : 경기도 판교 스타트업 캠퍼스
              </h5>
              <br />
              <div className="footerContents-Contact-Us">
                <Link className="nav-link" to="#">
                  company
                </Link>
              </div>
              <div className="footerContents-Contact-Us">
                <Link className="nav-link" to="#">
                  Purpose
                </Link>
              </div>
              <div className="footerContents-Contact-Us">
                <Link className="nav-link" to="#">
                  hostory
                </Link>
              </div>
              <div className="footerContents-Contact-Us">
                <Link className="nav-link" to="#">
                  github
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
