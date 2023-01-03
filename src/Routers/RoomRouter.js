import React from 'react'
import CreateRoom from '../Pages/CreateRoom';
import { Route, Routes } from 'react-router-dom';
import SimpleRoom from '../Pages/SimpleRoom';
import Rooms from '../Pages/Rooms';
import RoomDetail from '../Pages/RoomDetail';

const RoomRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/CreateRoom" element={<CreateRoom />} />
        <Route path="/SimpleRoom" element={<SimpleRoom />} />
        <Route path="/RoomDetail" element={<RoomDetail />} />
      </Routes>
    </div>
  )
}

export default RoomRouter