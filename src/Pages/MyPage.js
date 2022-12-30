import React from 'react'
import MyPage2 from '../components/MyPage2';
import Profile from '../components/Profile';

const MyPage = () => {
  return (
    <div className="page container">
        <div>
            <Profile />
        </div>
        <hr />
        <div>
            <MyPage2 />
        </div>
    </div>
  )
}

export default MyPage;