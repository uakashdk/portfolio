import React from 'react'
import Project1 from '../images/img1.avif'
import Project2 from '../images/img7.avif'
import Project3 from '../images/img3.avif'
import Project4 from '../images/img4.avif'
import Project5 from '../images/img5.avif'
import Project6 from '../images/img6.avif'
const Portfolio = () => {
  return (
    <div className=' bg-slate-800 text-white'>
    {/* center container */}
      <div>
      {/* Heading container */}
      <div className=' text-center py-20'>
      <h1 className='text-5xl font-bold'>Latest <span className=' text-cyan-500'>Project</span></h1>
      </div>
      {/* main container */}
        <div className=' grid grid-flow-col'>
           <div>
            <img src={Project1} alt="" className=' w-96 h-60 border rounded-3xl m-10 border-none hover:scale-110 duration-200' />
           </div>
           <div>
            <img src={Project2} alt="" className=' w-96 h-60 border rounded-3xl m-10 border-none hover:scale-110 duration-200' />
           </div>
           <div>
            <img src={Project3} alt="" className=' w-96 h-60 border rounded-3xl m-10 border-none hover:scale-110 duration-200' />
           </div>
           </div>
           <div className=' grid grid-flow-col'>
           <div>
            <img src={Project4} alt="" className=' w-96 h-60 border rounded-3xl m-10 border-none hover:scale-110 duration-200' />
           </div>
           <div>
            <img src={Project5} alt="" className=' w-96 h-60 border rounded-3xl m-10 border-none hover:scale-110 duration-200' />
           </div>
           <div>
            <img src={Project6} alt="" className=' w-96 h-60 border rounded-3xl m-10 border-none hover:scale-110 duration-200' />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio