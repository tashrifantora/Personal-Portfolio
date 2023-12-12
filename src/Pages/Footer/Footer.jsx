import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[#2d383f] p-5 mb-5">
            <div>
                <div className=" mt-5  grid grid-cols-1 md:grid-cols-3 items-center text-white">

                    <div>
                        <div className="border-2 border-white"></div>
                    </div>


                    <div className="mt-5">
                        <h1 className="text-2xl text-center font-semibold">A N T O R A</h1>
                        <div className="text-2xl flex justify-center gap-10 mt-6">
                            <FaGithub></FaGithub>
                            <MdEmail></MdEmail>
                            <FaLinkedin></FaLinkedin>
                        </div>
                    </div>


                    <div>
                        <div className="border-2 border-white"></div>
                    </div>
                </div>
            </div>

            <p className="text-center text-white mt-3">Copyright ©. All rights reserved</p>

        </div>
    );
};

export default Footer;