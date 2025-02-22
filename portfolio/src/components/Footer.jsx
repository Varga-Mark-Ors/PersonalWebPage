import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/CV/Mark-Ors-Varga-CV-EN.pdf'

const Footer = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center bg-[#1a1a1a]">
      <ul className="flex space-x-4">
        <li className="w-[60px] h-[40px] flex justify-center items-center bg-[#0274b3] rounded-lg">
          <a className="flex justify-center items-center w-full text-gray-200" href="https://www.linkedin.com/in/m%C3%A1rk-%C3%B6rs-varga/" 
            target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[60px] h-[40px] flex justify-center items-center bg-[#000000] rounded-lg">
          <a className="flex justify-center items-center w-full text-gray-200" href="https://github.com/Varga-Mark-Ors" 
            target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[60px] h-[40px] flex justify-center items-center bg-[#eba340] rounded-lg">
          <a className="flex justify-center items-center w-full text-gray-200" href="https://leetcode.com/u/VMark/" 
            target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={30} />
          </a>
        </li>
        <li className="w-[60px] h-[40px] flex justify-center items-center bg-[#7d8a99] rounded-lg">
          <a className="flex justify-center items-center w-full text-gray-200" href={CV} download="Varga_Márk_Örs_EN.pdf">
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

