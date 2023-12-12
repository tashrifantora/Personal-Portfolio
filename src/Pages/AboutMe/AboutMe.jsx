import Me from '../../assets/aboutme.jpg'
import { FaUser, FaUserGraduate, FaAngleDoubleRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdContactPage, MdEmail, MdAddLocationAlt } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto  flex gap-4 '>
                {/* Side 1 */}
                <div className='mt-32'>
                    <div className='relative'>
                        <img className='border-8 border-black rounded-full md:w-48 lg:w-64 absolute -top-28 ml-12' src={Me} alt="" />
                    </div>

                    <div className='bg-[#2d383f] rounded  text-white lg:w-96 md:w-80 lg:p-3 p-1  min-h-screen '>
                        <div className=' mb-14'>
                            <h1 className=' text-xl font-semibols flex items-center md:mt-28 lg:mt-44 mb-5 gap-1'><FaUser className='text-xl ml-3'></FaUser>  About Me:</h1>
                            <p className='ml-3 text-lg'><span className='text-xl font-bold mb-20'>Hello!!</span> <br /> I am Antora. A front-End Developer and also a student. I passionate about crafting user-friendly websites using HTML, CSS,  JavaScript, Framework [ React, Tailwind ] and the way to Back-End. </p>
                        </div>

                        {/* Contact */}
                        <div className=' mb-14'>
                            <h1 className=' text-xl font-bold flex items-center mt-28 mb-5 gap-1'><MdContactPage className='text-2xl ml-3 font-bold'></MdContactPage>Contact:</h1>
                            <p className='ml-5 text-lg'>
                                <div className='flex items-center gap-4 mb-3'>
                                    <IoCall></IoCall> <span>+8801746780***</span>
                                </div>
                                <div className='flex items-center gap-4 mb-3'>
                                    <MdEmail></MdEmail> <span>antoraquanta65@gmail.com</span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <MdAddLocationAlt></MdAddLocationAlt> <span>Dhaka, Bangladesh</span>
                                </div>
                            </p>
                        </div>

                        {/* Soft Skills */}
                        <div>
                            <h1 className='text-xl font-bold flex items-center mt-20 mb-5 ml-4 gap-2 '><PiLinkSimpleBold></PiLinkSimpleBold>Social Links</h1>

                            <div className='text-3xl flex gap-3 ml-10'>
                                <Link to='https://github.com/tashrifantora'>
                                    <FaGithub className='cursor-pointer' ></FaGithub>
                                </Link>


                                <Link to='https://www.linkedin.com/in/subrina-yeasmin-antora-27a06b268/'>
                                    <FaLinkedin></FaLinkedin>
                                </Link>

                                <Link className='tooltip  hover:tooltip-bottom' data-tip="antoraquanta65@gmail.com">
                                    <MdEmail></MdEmail>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Side 2 */}
                <div className='mt-5 w-11/12 p-10'>
                    <div className='mb-10'>
                        <h1 className='text-4xl mb-2 mt-5  font-semibold uppercase'>Subrina Yeasmin</h1>
                        <span className='text-5xl font-bold uppercase'>Antora</span>
                    </div>

                    {/* Education */}
                    <div>
                        <h1 className='text-2xl font-bold flex items-center mt-20 mb-5 gap-2'><FaUserGraduate></FaUserGraduate>Education</h1>
                    </div>
                    <div>
                        <h1 className='text-xl mb-4 font-semibold'> Degree:</h1>

                        {/* Try Zone */}
                        <div className="flex max-h-screen p-2 leading-7">

                            <div className="bg-black relative w-1">
                                <p className='text-8xl absolute -bottom-4 -left-2'>.</p>

                                <p className='text-8xl absolute -top-24 mt-2 -left-2'>.</p>
                            </div>

                            <div className="pl-4 ">
                                <p className='text-lg font-medium'>University of Liberal Arts Bangladesh </p>
                                <p className='font-semibold'>Department of English</p>
                                <p>First Semester</p>
                            </div>
                        </div>
                    </div>

                    {/* College */}
                    <div>
                        <h1 className='text-xl mb-4 font-semibold  mt-14'> College:</h1>

                        {/* Try Zone */}
                        <div className="flex max-h-screen p-2">

                            <div className="bg-black relative w-1">
                                <p className='text-8xl absolute -bottom-4 -left-2'>.</p>

                                <p className='text-8xl absolute -top-24 mt-2 -left-2'>.</p>
                            </div>

                            <div className="pl-4 leading-7">
                                <p className='text-lg font-medium'>Amrita Lal Dey College, Barishal</p>
                                <p className='font-semibold'> Arts and Humanities</p>
                                <p>G.P.A : 5.00 </p>
                            </div>
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div>
                        <h1 className='text-2xl font-bold flex items-center mt-20 mb-5 gap-2'><FaAngleDoubleRight></FaAngleDoubleRight>Soft Skill</h1>
                        <ul className='list-disc ml-16 leading-8 text-lg'>
                            <li>Great communication skill</li>
                            <li> Being flexible and open-minded to adjust to new situations, environments, and changes in work or life.</li>
                            <li><span className='font-semibold'>Teamwork/Collaboration:</span>Working effectively with others, fostering teamwork, and contributing positively in group settings.</li>
                            <li><span className='font-semibold'>Leadership:</span> Developing qualities that inspire and guide others, fostering a positive environment</li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutMe;