import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav]=useState(false);
    const Links=[
        {
            id:1,
            Link:'home'
        },
        {
            id:2,
            Link:'about'
        },
        {
            id:3,
            Link:'skill'
        },
        {
            id:4,
            Link:'portfolio'
        },
        {
            id:5,
            Link:'contact'
        },
    ];
  return (
    <div className='flex justify-between item-center w-full h-20 text-white fixed bg-slate-700 px-10 py-5'>
     <div>
        <h1 className='font-bold text-4xl'>Portfo<span className='font-bold text-cyan-400 '>lio</span></h1>
     </div>
     <ul className='hidden md:flex'>
      {Links.map(({id,Link})=>{
        return(
            <li key={id} className='px-4 capitalize cursor-pointer font-medium hover:scale-105 duration-200'>{Link}</li>
        );
        })}
     </ul>
     <div onClick={()=>setNav(!nav)} className=' cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
     </div>
     {nav &&(
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-white'>
     {Links.map(({id,Link})=>{
        return(
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl '>{Link}</li>
        );
        })}
     </ul>
     )  }
   
    </div>
  )
}

export default Navbar