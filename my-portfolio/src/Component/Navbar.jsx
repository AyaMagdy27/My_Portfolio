import logo from '../assets/logo1.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneSquare } from 'react-icons/fa';
import { SiNetlify } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className = "mb-20 flex items-center justify-between py-1 bg-bg-sp shadow-lg shadow-violet-300 500/50 z-50">
            <div className="flex flex-shrink-0 items-center px-16">
                <img src={logo} alt="logo" className='w-24' />
            </div>
            <div >
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl px-8">
                <FaLinkedin color='rgb(59 7 100)'/>
                <FaGithubSquare color='rgb(59 7 100)' />
                <SiNetlify color='rgb(59 7 100)'/>
                <FaSquareWhatsapp color='rgb(59 7 100)' />
                <FaPhoneSquare color='rgb(59 7 100)'/>

            </div>
        </nav>
    )
}

export default Navbar
