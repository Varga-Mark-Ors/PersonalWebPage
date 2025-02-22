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
      <div name='skills' className='w-full min-h-screen bg-[#ecfffe] text-[#1a1a1a] flex justify-center items-center'>
        
        {/* Container */}
        <div className='max-w-[1000px] w-full p-4 flex flex-col justify-center items-center text-center'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#0078a1]'>Skills</p>
            <p className='py-4'>These are the technologies I have worked with:</p>
          </div>
  
          {/* Icon container */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8 max-w-[90%] mx-auto'>
            {[  
              { img: JAVA, name: "Java" },
              { img: JS, name: "JavaScript" },
              { img: Python, name: "Python" },
              { img: Spring, name: "Spring" },
              { img: HTML, name: "HTML" },
              { img: CSS, name: "CSS" },
              { img: ReactImage, name: "React" },
              { img: Github, name: "Github" },
            ].map((skill, index) => (
              <div key={index} className='shadow-md shadow-[#0078a1] bg-[#f4f3f2] hover:scale-110 duration-500 p-2 rounded-lg'>
                <img className='w-20 mx-auto' src={skill.img} alt={`${skill.name} icon`} />
                <p className='my-4 text-[#0078a1]'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
  
export default Skills;