import React from 'react'
import Navbar from './component/Navbar'
import { IoIosList } from "react-icons/io";
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
const App = () => {
  const [open, setOpen] = useState(true);
  return (
   <div className='bg-gray-900 h-screen'>
  <header className='py-5 px-5 bg-black text-white'>
    <IoIosList
      size={25}
      onClick={() => setOpen(!open)}
    />
  </header>

  <div className="flex">
    <Navbar show={open} />

    <div className="p-5 text-white flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  </div>
</div>
  )
}

export default App