import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVA from '../assets/java.png'
import JS from '../assets/javascript.png'
import Python from '../assets/python.png'
import Github from '../assets/github.png'
import Spring from '../assets/spring.png'
import ReactImage from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#00a6a6] text-[#EFE9D5] py-4'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#EFE9D5]'>Skills</p>
                <p className='py-4'>These are the technologies I have worked with:</p>
            </div>

            {/* Icon container */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] bg-[#EFE9D5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVA} alt='Java icon' />
                    <p className='my-4 text-[#00a6a6]'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#EFE9D5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt='JavaScript icon' />
                    <p className='my-4 text-[#00a6a6]'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#EFE9D5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='Python icon' />
                    <p className='my-4 text-[#00a6a6]'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#EFE9D5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Spring} alt='Spring icon' />
                    <p className='my-4 text-[#00a6a6]'>Spring</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#EFE9D5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4 text-[#00a6a6]'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#EFE9D5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                    <p className='my-4 text-[#00a6a6]'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#EFE9D5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImage} alt='React icon' />
                    <p className='my-4 text-[#00a6a6]'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#EFE9D5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='Github icon' />
                    <p className='my-4 text-[#00a6a6]'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills