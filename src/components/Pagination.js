import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex align-baseline me-5">
        {/* Search Bar */}
        <div class="align-baseline">
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

        {/* select */}
        <div class="align-baseline">
          <select class="form-select" aria-label="Default select example">
            <option selected>목록</option>
            <option value="1">제목</option>
            <option value="2">카테고리</option>
            <option value="3">글쓴이</option>
          </select>
        </div>
      </div>

      {/* Pagination */}
      <div aria-label="Page navigation example align-baseline">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <Link className="page-link">Prev</Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              Next
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
