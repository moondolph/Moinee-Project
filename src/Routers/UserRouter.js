import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyPage from '../Pages/MyPage';
import SignUp from '../Pages/SignUp';
import SignUp2 from '../Pages/SignUp2';

const UserRouter = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default UserRouter;