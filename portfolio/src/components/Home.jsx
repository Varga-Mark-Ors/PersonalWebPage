import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ffffff]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#00a6a6]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#e4d276]'>Márk-Örs Varga</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#d5c46f]'>I am a Software Engineer</h2>
            <p className='text-[#d5c46f] py-4 max-w-[700px]'>I recently graduated with a degree in Computer Science from the University of Debrecen.
                I am actively seeking a full-time position as a Full-Stack Developer.
                My focus is on continuously developing both my technical and soft skills, 
                and I am eager to contribute to a dynamic, multinational work environment.
            </p>
            <div>
                <button className='text-[#00a6a6] group border-[#00a6a6] border-2 px-6 py-3 my-2 flex items-center
                hover:text-[#ffffff] hover:bg-[#00a6a6] hover:border-[#00a6a6]'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home