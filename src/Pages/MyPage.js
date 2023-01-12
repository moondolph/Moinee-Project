import React from 'react'
import MyPage2 from '../components/MyPage2';
import Profile from '../components/Profile';
import { useState, useEffect } from "react";
import axios from "axios";


const MyPage = () => {
  return (
    <div className="page container">
        <div>
            {/* <Profile room={user}/> */}
        </div>
        <hr/>
        <div>
            <MyPage2 />
        </div>
    </div>
  )
}

export default MyPage;