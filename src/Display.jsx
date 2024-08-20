import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Bottom from './component/Bottom';


const Display = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
         
        </Routes>
        <Bottom />
      </BrowserRouter>
    </div>
  );
}

export default Display
