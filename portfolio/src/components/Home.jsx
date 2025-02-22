import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import backgroundImage from '../assets/background.jpg';

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div 
      name="home" 
      className="w-full h-screen bg-cover bg-center flex justify-center items-center text-center px-4" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Szövegdoboz */}
      <div className="bg-white bg-opacity-80 p-8 rounded-lg w-[90%] max-w-[800px] mx-auto">
        <p className="text-[#000000] pb-6 font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#1a1a1a]">Márk-Örs Varga</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#1a1a1a]">I am a Software Engineer</h2>
        <p className="text-[#000000] py-4 font-bold">
          I recently graduated with a degree in Computer Science from the University of Debrecen.
          I am actively seeking a full-time position as a Full-Stack Developer.
          My focus is on continuously developing both my technical and soft skills, 
          and I am eager to contribute to a dynamic, multinational work environment.
        </p>
        <div>
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            <button className="text-[#1a1a1a] group border-[#1a1a1a] border-2 px-6 py-3 my-2 flex items-center mx-auto
            hover:text-[#fe9f7f] hover:bg-[#1a1a1a] hover:border-[#1a1a1a] rounded-lg">
              View Work 
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
