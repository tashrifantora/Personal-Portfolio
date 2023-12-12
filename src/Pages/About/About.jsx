import { FaArrowDownLong } from "react-icons/fa6";
import img from '../../assets/img2.jpg'

const About = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-24 mb-8 ">Who am I ?</h1>
            <p className="flex justify-center text-4xl md:mb-10">
                <FaArrowDownLong ></FaArrowDownLong>
            </p>

            <div className="flex flex-col md:flex-row md:gap-20 p-10 max-w-7xl mx-auto">
                <div className="md:w-1/2 lg:w-1/3">
                    <img className="rounded-lg lg:ml-20 " src={img} alt="" />
                </div>
                <div className="w-1/2 md:mt-10 lg:mt-32 lg:ml-20">
                    <h1 className="text-2xl mt-5 md:text-4xl font-semibold text-[#1484ca] mb-6">About me:</h1>
                    <p className="md:text-lg max-w-full md:max-w-lg lg:leading-8 ">Hello, I am Antora. I am a Front-End developer also a student. I passionate about crafting user-friendly websites using HTML, CSS, and JavaScript. I am delving into frameworks like React, Tailwind. I strive to ensure websites are both functional and visually appealing. Without coding I love to do learning new thing, increase skills and travel.</p>
                </div>
            </div>

        </div>
    );
};

export default About;