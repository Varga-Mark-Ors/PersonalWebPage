import React from 'react'
import Discord from '../assets/projects/discordBots.png'
import Football from '../assets/projects/footballWiki.png'
import VR from '../assets/projects/virtualReality.png'
import Game from '../assets/projects/videoGame.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#EFE9D5] bg-[#00a6a6]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#EFE9D5]'>Projects</p>
                <p className='py-4'>Take a look at some of my recent projects</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                
                {/* Grid item */}
                <div style={{backgroundImage: `url(${Game})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
                items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='test-3xl font-bold text-[#EFE9D5] tracking-wider'>
                            Text-based Adventure game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Football})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
                items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='test-3xl font-bold text-[#EFE9D5] tracking-wider'>
                            Football wikipedia website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${VR})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
                items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='test-3xl font-bold text-[#EFE9D5] tracking-wider'>
                            Virtual reality in Architecture
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Discord})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
                items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='test-3xl font-bold text-[#EFE9D5] tracking-wider'>
                            Discord bots
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects