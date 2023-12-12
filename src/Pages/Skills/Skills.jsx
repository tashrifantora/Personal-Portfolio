import html from '../../assets/html.jpg'
import css from '../../assets/css.jpg'
import tailwind from '../../assets/idI9erPtdw.jpeg'
import react from '../../assets/react.svg'
import figma from '../../assets/Figma Blog.jpg'
import boots from '../../assets/Bootstrap.jpg'
import responsive from '../../assets/Responsive.jpg'
import './skills.css'
import TopProjects from '../TopProjects/TopProjects'

const Skills = () => {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold mt-10 ">Skill-Set</h1>
                <div className="border-b-4 border-black 
            rounded-lg md:w-1/12 lg:w-20 mt-1 mb-10"></div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                    <div className="cards border rounded mt-5 ml-6 p-4">
                        <img className='w-24' src={html} alt="" />
                        <h1 className='text-xl ml-6 font-semibold mb-3'>HTML</h1>
                        <p className='ml-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi voluptate provident iusto odit nulla corrupti velit consequatur, autem repellat, beatae distinctio, repudiandae quod. Sint eum a blanditiis impedit voluptatem!</p>
                    </div>

                    <div className="cards border p-4 rounded mt-5 ml-6">
                        <img className='w-24' src={css} alt="" />
                        <h1 className='text-xl ml-6 font-semibold mb-3'>CSS</h1>
                        <p className='ml-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi voluptate provident iusto odit nulla corrupti velit consequatur, autem repellat, beatae distinctio, repudiandae quod. Sint eum a blanditiis impedit voluptatem!</p>
                    </div>

                    <div className="cards border p-4 rounded mt-5 ml-6">
                        <img className='w-24' src={tailwind} alt="" />
                        <h1 className='text-xl ml-6 font-semibold mb-3'>Tailwindcss</h1>
                        <p className='ml-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi voluptate provident iusto odit nulla corrupti velit consequatur, autem repellat, beatae distinctio, repudiandae quod. Sint eum a blanditiis impedit voluptatem!</p>
                    </div>

                    <div className="cards border p-4 rounded mt-5 ml-6">
                        <img className='w-20 mb-3' src={react} alt="" />
                        <h1 className='text-xl ml-6 font-semibold mb-3'>React</h1>
                        <p className='ml-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi voluptate provident iusto odit nulla corrupti velit consequatur, autem repellat, beatae distinctio, repudiandae quod. Sint eum a blanditiis impedit voluptatem!</p>
                    </div>

                    <div className="cards border p-4 rounded mt-5 ml-6">
                        <img className='w-24' src={figma} alt="" />
                        <h1 className='text-xl ml-3 font-semibold  mb-3'>Figma</h1>
                        <p className='ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi voluptate provident iusto odit nulla corrupti velit consequatur, autem repellat, beatae distinctio, repudiandae quod. Sint eum a blanditiis impedit voluptatem!</p>
                    </div>

                    <div className="cards border p-4 rounded mt-5 ml-6">
                        <img className='w-24' src={boots} alt="" />
                        <h1 className='text-xl ml-3 font-semibold  mb-3'>Bootstrap</h1>
                        <p className='ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi voluptate provident iusto odit nulla corrupti velit consequatur, autem repellat, beatae distinctio, repudiandae quod. Sint eum a blanditiis impedit voluptatem!</p>
                    </div>

                    <div className="cards border p-4 rounded mt-5 ml-6">
                        <img className='w-24 rounded mb-3' src={responsive} alt="" />
                        <h1 className='text-xl ml-2 font-semibold  mb-3'>Responsive website</h1>
                        <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi voluptate provident iusto odit nulla corrupti velit consequatur, autem repellat, beatae distinctio, repudiandae quod. Sint eum a blanditiis impedit voluptatem!</p>
                    </div>
                </div>
            </div>
            <TopProjects></TopProjects>

        </div>
    );
};

export default Skills;