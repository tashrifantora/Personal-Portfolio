import contact from '../../assets/contactUs.jpg'
import { IoIosSend } from "react-icons/io";

const ContactMe = () => {
    return (
        <div className='px-5 md:px-1'>
            <div className="">


                <div className="bg-[#404e57] rounded p-5 mt-8 md:flex-col gap-4">

                    <img className='md:w-1/2 md:mx-auto rounded-lg' src={contact} alt="" />

                    <form className=" md:w-3/4 lg:w-1/2 mx-auto lg:mt-32">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-white">Name:</span>
                            </label>
                            <input type="name" required name="Name" placeholder="Name" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-white">Email:</span>
                            </label>
                            <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-white">Number:</span>
                            </label>
                            <input type="text" required name="number" placeholder="Number" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-white">Message:</span>
                            </label>
                            <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                        </div>

                        <div className='flex  justify-end relative'>
                            <input className='btn btn-lg mt-3 ' type="submit" value="Send" />
                            <IoIosSend className='absolute top-8 right-[70px] text-xl'></IoIosSend>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default ContactMe;