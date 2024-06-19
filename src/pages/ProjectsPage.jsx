import React from 'react'
import Carousel from '../components/Carousel/Carousel'

const ProjectsPage = () => {
    return (
        <div className='mt-4 ml-4 h-full'>
            <h1 className="brand">My work</h1>
            <h2 className="  dark:text-white  text-gray-700 font-bold uppercase text-3xl ">Recent proyects</h2>
            <Carousel/>
        </div>
    )
}

export default ProjectsPage