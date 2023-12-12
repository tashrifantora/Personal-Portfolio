import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";
import About from "../About/About";

const Home = () => {
    return (
        <div>
            {/* Home */}
            <div className=''>
                <div className="flex justify-around gap-10 h-[700px] bg-[#2d383f] relative">
                    <div className="text-left ">
                        <div className="md:max-w-md ml-5 md:ml-20 text-white mt-28">
                            <h1 className="text-3xl md:text-5xl font-bold">Hello<span className='text-7xl'>.</span></h1>
                            <p className="py-6 text-xl md:text-2xl">---- I am Subrina Yeasmin <br /> <span className='md:ml-36 text-2xl md:text-4xl font-semibold'>Antora</span></p>
                            <p className='mb-7 md:text-xl'>A Front-End Developer skilled in
                                HTML, CSS, and JavaScript. An eager learner with
                                a passion for creating responsive, user-centric
                                web applications. Collaborative team player
                                adept at problem-solving.</p>
                            <div className='flex justify-end'>
                                <button className="button flex justify-center gap-1 items-center">Downlod Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className="hero h-[700px] w-1/2" style={{ backgroundImage: 'url(https://i.ibb.co/WWjXxkZ/photo-2023-12-10-02-06-19-2.jpg)', width: '600px', borderRadius: '10px' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                    </div>
                </div>
                <div className='text-2xl text-white flex gap-3 justify-end absolute md:right-14 lg:right-80 -mt-12 ml-5'>
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

export default Home;