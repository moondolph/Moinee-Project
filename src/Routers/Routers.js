import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import RoomRouter from './RoomRouter';
import UserRouter from './UserRouter';

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Main />} />
            <Route path='/Users/*' element= {<UserRouter/>} />
            <Route path='/Rooms/*' element= {<RoomRouter/>} />
        </Routes>
    </div>
  )
}

export default Routers;