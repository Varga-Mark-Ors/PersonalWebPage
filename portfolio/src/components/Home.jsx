import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div name='home' className='w-full h-screen bg-[#00a6a6]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#EFE9D5]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#EFE9D5]'>Márk-Örs Varga</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#EFE9D5]'>I am a Software Engineer</h2>
            <p className='text-[#EFE9D5] py-4 max-w-[700px]'>I recently graduated with a degree in Computer Science from the University of Debrecen.
                I am actively seeking a full-time position as a Full-Stack Developer.
                My focus is on continuously developing both my technical and soft skills, 
                and I am eager to contribute to a dynamic, multinational work environment.
            </p>
            <div>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    <button className='text-[#EFE9D5] group border-[#EFE9D5] border-2 px-6 py-3 my-2 flex items-center
                    hover:text-[#00a6a6] hover:bg-[#EFE9D5] hover:border-[#EFE9D5]'>
                        View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home