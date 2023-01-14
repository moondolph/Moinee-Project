import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import RoomRouter from './RoomRouter';
import UserRouter from './UserRouter';
import RoomRanking from '../Pages/RoomRanking';

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Main />} />
            <Route path='/Users/*' element= {<UserRouter/>} />
            <Route path='/Rooms/*' element= {<RoomRouter/>} />
            <Route path="/RoomRanking" element={<RoomRanking />} />
        </Routes>
    </div>
  )
}

export default Routers;