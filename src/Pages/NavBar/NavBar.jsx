import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.jpg';
import './navbar.css'


const NavBar = () => {
    const navLinks = <>
        <li className='text-lg text-white font-semibold'><Link to="/home">Home</Link></li>
        <li className='text-lg text-white font-semibold'><Link to="/skill">Skills</Link></li>

        <li className='text-lg text-white font-semibold'><Link to="/about-me">About Me</Link></li>
        <li className='text-lg text-white font-semibold'><Link to="/contact-me">Contact</Link></li>

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




        </div>
    );
};

export default NavBar;
/* md:right-10 lg:right-0 md:top-[730px] lg:top-0 mr-5 */