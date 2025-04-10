import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#ffd4c5] text-[#0078a1]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0078a1]'>
                        About
                    </p>
                </div>
                <div></div>
            </div> 
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I am Márk.</p>
                    <p>Nice to meet you.</p>
                    <p>Please take a look around my webpage.</p>
                </div>
                <div>
                    <p>
                        Throughout my university studies, I developed a strong foundation in Java-based software development and gained 
                        practical experience in object-oriented programming, database management, and the use of modern development 
                        tools and methodologies through various projects. I am dedicated to delivering high-quality work and constantly 
                        improving my skills through continuous learning.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About