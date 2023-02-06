import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyPage from '../Pages/MyPage';
import SignUp from '../Pages/SignUp';
import MyPage02 from '../Pages/MyPage02';
import Login from '../Pages/Login';
import MyTag from '../Pages/MyTag';

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/MyPage02" element={<MyPage02 />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/MyTag" element={<MyTag />}/>
      </Routes>
    </div>
  );
}

export default UserRouter;