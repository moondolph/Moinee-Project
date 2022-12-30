import React from 'react';
import MainContents from '../components/MainContents';
import SideBarMain from '../components/SideBarMain';
import Pagination from '../components/Pagination';
import SortList from '../components/SortList';
import TagUsersProfile from '../components/TagUsersProfile';

const MyTag = () => {
    
  return (
    <div className="d-flex">
      <div className="row mt-4">
        <div className="ms-3 row">
        <div>
            <h1>Room Tag</h1>
          </div>
          <hr />
          {Array(16)
            .fill(1)
            .map((a, i) => a + i)
            .map((a2, i) => {
              return (
                <div key={i} className="ms-2 mb-5 width-22">
                  <MainContents />
                </div>
              );
            })}
        </div>

        <div className="ms-3 row">
          <div>
            <h1>User Tag</h1>
          </div>
          <hr />
          {Array(16)
            .fill(1)
            .map((a, i) => a + i)
            .map((a2, i) => {
              return (
                <div key={i} className="ms-2 mb-5 width-22 bg-light">
                  <TagUsersProfile />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MyTag;