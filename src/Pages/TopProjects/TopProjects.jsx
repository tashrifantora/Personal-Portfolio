import { Link } from 'react-router-dom';
import github from '../../assets/GitHub_ Let’s build from here.jpg'
const TopProjects = () => {
    return (
        <div className='px-5 md:px-10'>
            <h1 className='text-4xl font-bold my-10 ml-5'>My - Top - Projects</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='relative mb-8'>
                    <div className="card shadow-xl   bg-base-100 p-5">
                        <img className='w-20 mb-4' src={github} alt="" />
                        <div className="">
                            <h2 className="card-title mb-4">Law Site</h2>
                            <Link to='https://tashrifantora.github.io/Legal-Solution-DaisyUI/' className='font-semibold'><span className='text-lg font-medium'>Live Link: </span>https://tashrifantora.github.io/Legal-Solution-DaisyUI/</Link>

                        </div>
                    </div>
                    <div className='text-4xl font-extrabold  absolute -top-6 md:left-80 lg:left-96'>01</div>
                </div>

                <div className='relative mb-8'>
                    <div className="card shadow-xl   bg-base-100 p-5">
                        <img className='w-20 mb-4' src={github} alt="" />
                        <div className="">
                            <h2 className="card-title mb-4">Product Buy Sell</h2>
                            <Link to='https://assignment-10-21496.firebaseapp.com/' className='font-semibold'><span className='text-lg font-medium'>Live Link: </span>https://assignment-10-21496.firebaseapp.com/</Link>

                        </div>
                    </div>
                    <div className='text-4xl font-extrabold  absolute -top-6 md:left-80 lg:left-96'>02</div>
                </div>

                <div className='relative'>
                    <div className="card shadow-xl   bg-base-100 p-5">
                        <img className='w-20 mb-4' src={github} alt="" />
                        <div className="">
                            <h2 className="card-title mb-4">Event Management Site</h2>
                            <Link to='https://assignment-09-bc3f1.firebaseapp.com/' className='font-semibold'><span className='text-lg font-medium'>Live Link: </span>https://assignment-09-bc3f1.firebaseapp.com/</Link>

                        </div>
                    </div>
                    <div className='text-4xl font-extrabold  absolute -top-6 md:left-80 lg:left-96'>03</div>
                </div>
            </div>

        </div>
    );
};

export default TopProjects;