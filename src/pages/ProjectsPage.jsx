import React from 'react'
import Carousel from '../components/Carousel/Carousel'

const ProjectsPage = () => {
    return (
        <div className='w-full  gap-10 pt-10 px-10'>
            <h1 className="brand ">My work</h1>
            <h2 className=" dark-text font-bold uppercase text-4xl 2xl:text-7xl  my-4 ">Recent proyects</h2>
            <Carousel/>
        </div>
    )
}

export default ProjectsPage