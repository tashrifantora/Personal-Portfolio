import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.jpg';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";
import './navbar.css'
import About from '../About/About';

const NavBar = () => {
    const navLinks = <>
        <li className='text-lg text-white font-semibold'><Link to="/home">Home</Link></li>
        <li className='text-lg text-white font-semibold'><Link to="/home">Skills</Link></li>
        <li className='text-lg text-white font-semibold'><Link to="/about">Education</Link></li>
        <li className='text-lg text-white font-semibold'><Link to="/about">About Me</Link></li>
        <li className='text-lg text-white font-semibold'><Link to="/about">Contact</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-[#2d383f]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#324b5a] rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div to="/" className="text-xl cursor-pointer">
                        <img className='w-14 rounded' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>

            {/* Home */}
            <div className=''>
                <div className=" flex justify-around gap-10 h-[700px] bg-[#2d383f] relative">
                    <div className="text-left ">
                        <div className="max-w-md ml-20 text-white mt-28">
                            <h1 className="text-5xl font-bold">Hello<span className='text-7xl'>.</span></h1>
                            <p className="py-6 text-2xl">---- I'm Subrina Yeasmin <br /> <span className='ml-36 text-4xl font-semibold'>Antora</span></p>
                            <p className='mb-7 text-xl'>A Front-End Developer skilled in
                                HTML, CSS, and JavaScript. An eager learner with
                                a passion for creating responsive, user-centric
                                web applications. Collaborative team player
                                adept at problem-solving.</p>
                            <div className='flex justify-end'>
                                <button className="button flex justify-center gap-1 items-center">Downlod Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className="hero h-[700px] " style={{ backgroundImage: 'url(https://i.ibb.co/WWjXxkZ/photo-2023-12-10-02-06-19-2.jpg)', width: '600px', borderRadius: '10px' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                    </div>
                </div>
                <div className='text-2xl text-white flex gap-3 justify-end absolute md:right-14 lg:right-80 -mt-12'>
                    <FaFacebook className='cursor-pointer hover:text-3xl hover:text-sky-700'></FaFacebook>
                    <FaInstagram className='cursor-pointer hover:text-3xl hover:text-sky-700'></FaInstagram>
                    <FaGithub className='cursor-pointer hover:text-3xl hover:text-sky-700'></FaGithub>
                    <FaLinkedin className='cursor-pointer hover:text-3xl hover:text-sky-700'></FaLinkedin>
                </div>
            </div>

            <About></About>
        </div>
    );
};

export default NavBar;
/* md:right-10 lg:right-0 md:top-[730px] lg:top-0 mr-5 */