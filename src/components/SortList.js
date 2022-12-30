const SortList = () => {
  return (
      <div className="me-8 align-baseline sortList-size width-100">
        {/* sort select */}
        <select className="form-select" aria-label="Default select example">
          <option value="0">최신순</option>
          <option value="1">가나다순</option>
          <option value="2">인기순</option>
        </select>
      </div>
  );
};

export default SortList;
