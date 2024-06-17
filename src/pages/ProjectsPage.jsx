import React from 'react'
import Carousel from '../components/Carousel/Carousel'

const ProjectsPage = () => {
    return (
        <div className='mt-4 ml-4'>
            <h1 className="bg-[#00334E] uppercase text-white  p-1 rounded -normal tracking-widest w-36 mb-5">My work</h1>
            <h2 className=" text-white font-bold uppercase text-xl ">Recent proyects</h2>
            <Carousel/>
        </div>
    )
}

export default ProjectsPage