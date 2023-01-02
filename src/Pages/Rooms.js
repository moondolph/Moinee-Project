import React from 'react';
import MainContents from '../components/MainContents';
import SideBarMain from '../components/SideBarMain';
import Pagination from '../components/Pagination';
import SortList from '../components/SortList';

const Rooms = () => {
    
  return (
    <div className="d-flex">
      <div className="me-4 bg-secondary ">
        <div className="mt-5">
          <SideBarMain />
        </div>
      </div>
      <div className="row mt-4">
        <div className='mt-3 mb-3 d-flex justify-content-end'>
          <SortList />
        </div>
        <div className="ms-3 row">
          {Array(16)
            .fill(1)
            .map((a, i) => a + i)
            .map((a2, i) => {
              return (
                <div key={i} className="ms-3 mb-5 width-22">
                  <MainContents />
                </div>
              );
            })}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
