import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({show}) => { 
    
  return (
    <div className={`bg-black text-white h-screen overflow-hidden transition-all duration-500 ${
        show ? 'w-64 px-6' : 'w-0 px-0'
      }`}>
        
        <ul>
            <li className='p-2 hover:bg-gray-700'><Link to="/">Home</Link></li>
            <li className='p-2 hover:bg-gray-700'><Link to="/About">About</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar   