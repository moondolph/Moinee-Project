import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyPage from '../Pages/MyPage';
import SignUp from '../Pages/SignUp';
import SignUp2 from '../Pages/SignUp2';
import MyPage01 from '../Pages/MyPage01';
import MyPage02 from '../Pages/MyPage02';
import Login from '../Pages/Login';
import MyTag from '../Pages/MyTag';

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/MyPage01" element={<MyPage01 />}/>
        <Route path="/MyPage02" element={<MyPage02 />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/MyTag" element={<MyTag />}/>
      </Routes>
    </div>
  );
}

export default UserRouter;