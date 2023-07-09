import React from 'react'
import {BiCodeAlt} from 'react-icons/bi'
import {FaReact}from 'react-icons/fa'
import {BsDatabaseFillCheck} from 'react-icons/bs'
const Skill = () => {
  return (
    <div className=" bg-slate-800 text-white font-medium">
    {/* center container */}
    <div className=' py-28 text-center'>
         <h1 className=' text-white text-5xl font-bold'> Our <span className=' text-cyan-500'> Services</span></h1> 
        </div>
       <div className='grid grid-flow-col'> 
        {/* grid container */}
        <div className=' border-2 border-white w-96 ml-5 rounded-2xl hover:scale-110 duration-200'>
        {/* webdeveloper */}
        <div className=' px-40'>
            <BiCodeAlt size={30} className=' text-cyan-500 hover:text-sky-700'/>
          </div>
          <div className=' text-center'>
            <h2 className=' text-cyan-500 py-2 text-2xl'>A frontend Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi aut, ullam quas voluptatum ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minima.</p>
            <div>
              <button className=' bg-cyan-500 text-black w-30 border rounded-2xl mt-4  shadow-cyan-500'>Read More</button>
            </div>
          </div>
        </div>
        {/* react-container */}
        <div className=' border-2 border-white w-96  ml-5 h-60 rounded-2xl hover:scale-110 duration-200'>
          <div className=' px-40'>
            <FaReact size={30} className=' text-cyan-500 hover:text-sky-700'/>
          </div>
          <div className='text-center'>
            <h2 className=' text-cyan-500 text-2xl py-2'>React Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi aut, ullam quas voluptatum ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minima.</p>
            <div>
              <button className=' bg-cyan-500 text-black w-30 border rounded-2xl mt-4  shadow-cyan-500'>Read More</button>
            </div>
          </div>
        </div>
        {/* database */}
        <div className=' border-2 border-white w-96 h-70 ml-5 rounded-2xl hover:scale-110 duration-200'>
        <div className=' px-40'>
           <BsDatabaseFillCheck size={30} className=' text-cyan-500 hover:text-sky-700'/>
          </div>
          <div className='  text-center'>
            <h2 className=' text-cyan-500 text-2xl py-2'> a good knowledge in Database</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi aut, ullam quas voluptatum ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minima.</p>
            <div>
              <button className=' bg-cyan-500 text-black w-30 border rounded-2xl mt-4  shadow-cyan-500'>Read More</button>
            </div>
          </div>
        </div>
        </div>
        </div> 
  )
}

export default Skill;