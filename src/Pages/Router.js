import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from './SignUp';
import SignUp2 from './SignUp2';
import Main from './Main';

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="" element = {<Main />} />
            <Route path="SignUp" element = {<Signup />} />
            <Route path="SignUp2" element = {<SignUp2 />} />
        </Routes>
    </div>
  )
}

export default Routers;