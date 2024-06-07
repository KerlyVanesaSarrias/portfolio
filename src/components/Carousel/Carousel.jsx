import React from 'react';

const Carousel = () => {

    const projects = [
        {
            id: 1,
            image: '/public/Fortune cookie.png',
            link: 'https://project1.com',
        },
        {
            id: 2,
            image: 'path/to/project2.jpg',
            link: 'https://project2.com',
        },
        {
            id: 3,
            image: 'path/to/project2.jpg',
            link: 'https://project2.com',
        },
        {
            id: 4,
            image: 'path/to/project2.jpg',
            link: 'https://project2.com',
        },
        {
            id: 5,
            image: 'path/to/project2.jpg',
            link: 'https://project2.com',
        },
        {
            id: 6,
            image: 'path/to/project2.jpg',
            link: 'https://project2.com',
        },
    ]
    return (
        <div className="overflow-hidden  whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-8 slide">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-70 h-80 m-4 transform transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={project.image}
                            alt={`Project ${project.id}`}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Carousel;