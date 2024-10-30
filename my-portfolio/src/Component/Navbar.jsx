import logo from '../assets/logo1.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneSquare } from 'react-icons/fa';
import { SiNetlify } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className=" flex items-center justify-between py-1 bg-bg-sp shadow-lg shadow-violet-300 500/50 mb-20">
            <div className="flex flex-shrink-0 items-center px-16">
                <img src={logo} alt="logo" className='w-24' />
            </div>
            <div>
                {/* You can add navigation links here if needed */}
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl px-8">
                <a href="https://www.linkedin.com/in/aya-magdy-15811b271" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin color='rgb(59 7 100)' />
                </a>
                <a href="https://github.com/AyaMagdy27" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare color='rgb(59 7 100)' />
                </a>
                <a href="https://app.netlify.com/teams/ayamagdy27/sites" target="_blank" rel="noopener noreferrer">
                    <SiNetlify color='rgb(59 7 100)' />
                </a>
                <a href="https://wa.me/201555117246" target="_blank" rel="noopener noreferrer">
                    <FaSquareWhatsapp color='rgb(59 7 100)' />
                </a>
                <a href="tel:+201555117246" target="_blank" rel="noopener noreferrer">
                    <FaPhoneSquare color='rgb(59 7 100)' />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
