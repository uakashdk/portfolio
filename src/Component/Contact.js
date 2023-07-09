import React from 'react'

const Contact = () => {
  return (
    <div className=' justify-center items-center bg-slate-800 text-white'>
    <div className=' text-center py-10'>
     <h1 className=' text-5xl font-bold'>Contact <span className=' text-cyan-500'>Me</span></h1>
    </div>
        <div className=' relative left-96'>
            <div>
                <input type="text" name="Fullname" id="name" placeholder='Enter Your Name' className=' w-64 ml-40 border-2 border-black bg-slate-900 text-white' />
                <input type="email" name="email" id="email" placeholder='Enter Your Email Address' className='bg-slate-900 text-white w-64 ml-2 border-2 border-black' />
            </div>
            <div>
                <input type="number" name="number" id="number" placeholder='Enter your Mobile Number' className=' bg-slate-900 text-white w-64 ml-40 border-2 border-black mt-2 '/>
                <input type="text" name="email-subject" id="subject" placeholder='Enter your Email Subject' className=' bg-slate-900 text-white w-64 ml-2 border-2 border-black mt-2'/>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Message Here' className=' w-96 ml-56 mt-2 bg-slate-900 text-white border-2 border-black'></textarea>
            </div>
        </div>
        <div className=' text-center'>
                <button className=' bg-cyan-500 text-black border-2 border-black  rounded-2xl mt-9 w-24 hover scale-110 duration-200'>Send Me</button>
            </div>
    </div>
  )
}

export default Contact