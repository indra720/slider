import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open,setopen]=useState(false)
  return (
    <>
      <header>
        <nav className='bg-green-500 flex justify-around items-center p-5 '>
          <div className='border bg-blue-500 text-white font-bold text-lg p-2 rounded-lg'>
            logo
            
          </div>
          <div className='md:flex  justify-between items-center gap-2 hidden  w-100 font-bold'> 
            <NavLink to='/' className={({isActive})=>
            isActive  ? 'text-red-500' : "text-black"}>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/service'>Service</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/crousel'>Crousel</NavLink>
            <NavLink to='/fetchApi'>Api</NavLink>
            <NavLink to='/fetchpost'>FetchPost</NavLink>
            {/* <NavLink to='/axios'>Axios</NavLink> */}
            <NavLink to='/axios2'>Axios2</NavLink>
          </div>
          <div>
            <button className='bg-blue-500 p-2 rounded-lg hover:bg-opcity-50 border'><NavLink to='/login'>Login</NavLink></button>
          </div>

          {
            open && (
            <div className='flex flex-col justify-between items-center gap-2 md:hidden'> 
            <NavLink to='/' className={({isActive})=>
            isActive  ? 'text-red-500' : "text-black"}>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/service'>Service</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/crousel'>Crousel</NavLink>
            <NavLink to='/fetchApi'>Api</NavLink>
            <NavLink to='/fetchpost'>FetchPost</NavLink>
            {/* <NavLink to='/axios'>Axios</NavLink> */}
            <NavLink to='/axios2'>Axios2</NavLink>
          </div>
            )
          }

          <button className='md:hidden' onClick={()=>setopen(!open)}>toggle</button>
        </nav>
      </header>
    </>
  )
}
