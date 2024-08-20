import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Bottom from './component/Bottom';
import Blog from './component/Blog';
import About from './component/About';


const Display = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route index element={<Blog />} />
        <Route path="/about" element={<About />} />
         
        </Routes>
        <Bottom />
      </BrowserRouter>
    </div>
  );
}

export default Display
