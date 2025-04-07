import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/myLogo.png'
import CV from '../assets/CV/Mark-Ors-Varga-CV-EN.pdf'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-white text-[#0078a1] bg-opacity-60'>      
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '40px'}}/>
        </div>

        {/* Menu */}
        
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        

        {/* Menu lines */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#F7F5EB] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[80px] md:w-[130px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px]
                 hover:ml-[-10px] duration-300 bg-[#0274b3]'>
                    <a  className='flex justify-between items-center w-full text-gray-200 mr-[-10px] lg:mr-0 duration-300' 
                    href='https://www.linkedin.com/in/m%C3%A1rk-%C3%B6rs-varga/' target="_blank" rel="noopener noreferrer">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[80px] md:w-[130px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px]
                 hover:ml-[-10px] duration-300 bg-[#000000]'>
                    <a  className='flex justify-between items-center w-full text-gray-200 mr-[-10px] lg:mr-0 duration-300' 
                    href='https://github.com/Varga-Mark-Ors' target="_blank" rel="noopener noreferrer">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[80px] md:w-[130px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px]
                 hover:ml-[-10px] duration-300 bg-[#eba340]'>
                    <a  className='flex justify-between items-center w-full text-gray-200 mr-[-10px] lg:mr-0 duration-300' 
                    href='https://leetcode.com/u/VMark/' target="_blank" rel="noopener noreferrer">
                        LeetCode <SiLeetcode size={30} />
                    </a>
                </li>
                <li className='w-[80px] md:w-[130px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px]
                 hover:ml-[-10px] duration-300 bg-[#7d8a99]'>
                    <a  className='flex justify-between items-center w-full text-gray-200 mr-[-10px] lg:mr-0 duration-300' 
                    href={CV} download="Mark-Ors-Varga-CV-EN.pdf">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar