const SortList = () => {
  return (
    <div className="d-flex d-flex justify-content-end">
      {/* sort select */}
      <div class="align-baseline sortList-size">
        <select class="form-select" aria-label="Default select example">
          <option selected>최신순</option>
          <option value="1">가나다순</option>
          <option value="2">좋아요순</option>
        </select>
      </div>
    </div>
  );
};

export default SortList;
