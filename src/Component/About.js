import React from 'react'
import HeroImage from '../images/Akash dubey.jpg'
const About = () => {
  return (
    <div className=' h-screen bg-slate-800 text-white'>
        <div className=' max-w-sc mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row about'>
            <div className=''>
             <img src={HeroImage} alt="Heroimage"/>
            </div>
            <div className='ml-20'>
                <h1 className='text-4xl py-5'>About US</h1>
                <p className='text-1xl py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus <br /> nam assumenda voluptates corporis amet reiciendis voluptatem architecto itaque, placeat <br /> obcaecati aperiam voluptas neque in dolores et. Optio maiores vel sit culpa quibusdam facilis vero ad fuga nulla fugit <br /> corrupti et molestias veritatis repellendus, voluptates eaque. Reprehenderit accusantium aspernatur culpa esse.</p>
                <p className='text-1xl py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem <br /> ex esse dignissimos iusto, et accusamus blanditiis saepe velit excepturi dolorum, <br /> quae nesciunt  culpa laudantium laboriosam dicta eaque reiciendis distinctio aspernatur aperiam <br /> odit vero quisquam commodi? Corrupti delectus quidem saepe aut repellat repudiandae in temporibus <br /> perspiciatis reiciendis? Corrupti, non expedita!</p>
                <div>
                    <button className=' w-80 h-20 bg-cyan-400 text-black text-4xl border rounded-2xl cursor-pointer hover:scale-110 duration-200 shadow shadow-cyan-400  '>Read more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About