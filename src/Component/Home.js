import React from 'react'
 import HeroImage from '../images/Akash dubey.jpg'
 import {FaLinkedinIn}from 'react-icons/fa'
 import {FaFacebookF}from 'react-icons/fa'
 import {FaTwitter}from 'react-icons/fa'
 import {FaInstagram}from 'react-icons/fa'
const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-slate-800 text-white'>
        <div className=' max-w-sc mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
            <div>
                <h2 className=' text-4xl py-4'>Hello i am a <span className=' text-cyan-400'>Fullstack Developer</span></h2>
                <p className='text-2xl py-3'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Enim obcaecati cumque  nobis eius ad tempore.</p>
                <div>
                    <ul className='flex px-4 gap-10 py-4'>
                        <li className=' bg-cyan-400 border border-black text-black h-10 w-10  cursor-pointer hover:scale-110 duration-200 px-1 py-1 rounded-full shadow shadow-cyan-400  '><FaFacebookF size={30}/></li>
                        <li className=' bg-cyan-400 border border-black text-black h-10 w-10 cursor-pointer hover:scale-110 duration-200 px-1 py-1 rounded-full shadow shadow-cyan-400'><FaInstagram size={30}/></li>
                        <li className=' bg-cyan-400 border border-black text-black h-10 w-10 cursor-pointer hover:scale-110 duration-200 px-1 py-1 rounded-full shadow shadow-cyan-400'><FaLinkedinIn size={30}/></li>
                        <li className=' bg-cyan-400 border border-black text-black h-10 w-10 cursor-pointer hover:scale-110 duration-200 px-1 py-1 rounded-full shadow shadow-cyan-400'><FaTwitter size={30}/></li>
                    </ul>
                </div>
                <div className=' py-4 px-8'>
                    <button className=' w-80 h-20 bg-cyan-400 text-black text-4xl border rounded-2xl cursor-pointer hover:scale-110 duration-200 shadow shadow-cyan-400 '>Download Resume</button>
                </div>
            </div>
            <div className=' ml-8 mt-6' >
                <img src={HeroImage} alt=" hero-sectionimage"/>
            </div>
        </div>
    </div>
  )
}

export default Home