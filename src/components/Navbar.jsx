import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router'


const Navbar = () => {
  const navigate =useNavigate()
  return (
    <div className='navbar'>
      <div><h1>Books App</h1></div>
      <div>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/favourites")}> My Favourites</button>
      </div>
    </div>
  )
}

export default Navbar