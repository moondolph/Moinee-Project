import React from 'react'
import CreateRoom from '../Pages/CreateRoom';
import { Route, Routes } from 'react-router-dom';

const RoomRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/CreateRoom" element={<CreateRoom />} />
      </Routes>
    </div>
  )
}

export default RoomRouter