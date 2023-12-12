import Me from '../../assets/aboutme.jpg'
import { FaUser, FaUserGraduate } from "react-icons/fa";
import { MdContactPage, MdEmail, MdAddLocationAlt } from "react-icons/md";
import { FaGripLinesVertical } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const AboutMe = () => {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto  flex gap-4 '>
                {/* Side 1 */}
                <div className='mt-32'>
                    <div className='relative'>
                        <img className='border-8 border-white rounded-full md:w-48 lg:w-64 absolute -top-28 ml-12' src={Me} alt="" />
                    </div>

                    <div className='bg-[#2d383f] rounded  text-white lg:w-96 md:w-80 lg:p-3 p-1  min-h-screen '>
                        <div className=' mb-14'>
                            <h1 className=' text-xl font-semibols flex items-center mt-28 mb-5 gap-1'><FaUser className='text-xl ml-3'></FaUser>  About Me:</h1>
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
                    </div>


                </div>

                {/* Side 2 */}
                <div className='bg-blue-200 mt-10 w-11/12 p-5'>
                    <div className='mb-14'>
                        <h1 className='text-4xl mb-2   font-semibold uppercase'>Subrina Yeasmin</h1>
                        <span className='text-5xl font-bold uppercase'>Antora</span>
                    </div>

                    {/* Education */}
                    <div>
                        <h1 className='text-2xl font-bold flex items-center mt-28 mb-5 gap-2'><FaUserGraduate></FaUserGraduate>Education</h1>
                    </div>
                    <div>
                        <h1 className='text-xl'> Degree:</h1>

                        {/* Try Zone */}
                        <div className="flex h-[300px] p-2">

                            <div className="bg-black relative w-1">
                                <p className='text-8xl absolute -bottom-4 -left-2'>.</p>

                                <p className='text-8xl absolute -top-24 mt-2 -left-2'>.</p>
                            </div>

                            <div className="pl-[20px]">Hello</div>
                        </div>
                        {/* Try Zone */}

                        {/*  <div>
                            <p className='text-7xl mr-5'>.</p>
                            <div className="h-[400px]  bg-black w-[2px]"></div>
                        </div> */}

                        <div>
                            <p>University of Liberal Arts Bangladesh </p>
                            <p>Department of English</p>
                            <p>First Semester</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;