import React from 'react';
import Fortune from '../../assets/Fortune cookie.png'
import Weather from '../../assets/WeatherApp.png'
import User from '../../assets/Users.png'
import RickAndMorty from '../../assets/RickAndMorty.png'
import Pokedex from '../../assets/Pokedex.png'

const Carousel = () => {

    const projects = [
        {
            id: 1,
            image: [Fortune],
            link: 'https://fortune-cookie-omega.vercel.app/',
            title: 'Fortune Cookie',
            description: 'A web app that generates random fortune cookie messages'
        },
        {
            id: 2,
            image: [Weather],
            link: 'https://weather-app-pi-ten-18.vercel.app/',
            title: 'Weather App',
            description: 'A web app that displays current weather and forecast for a given location'
        },
        {
            id: 3,
            image: [User],
            link: 'https://users-crud-three.vercel.app/',
            title: 'Users CRUD',
            description: 'A web app that allows users to create, read, update and delete user data',

        },
        {
            id: 4,
            image: [RickAndMorty],
            link: 'https://rick-and-morty-app-pi-umber.vercel.app/',
            title: 'Rick and Morty App',
            description: 'A web app that displays characters and episodes from the Rick and Morty TV series'
        },
        {
            id: 5,
            image: [Pokedex],
            link: 'https://pokedex-omega-khaki.vercel.app/',
            title: 'Pokedex',
            description: 'A web app that displays information about Pokémons'
        },
    
    ]
    return (
        <div className="overflow-hidden  whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-8 slide ">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transform transition-transform duration-75 hover:scale-105 w-max h-80 m-4 p-3.5 bg-white rounded-lg"
                    >
                        <img
                            src={project.image}
                            alt={`Project ${project.id}`}
                            className="w-full h-4/5 object-cover rounded-lg  drop-shadow-2xl"
                        />
                        <h2 className="text-lg font-bold text-gray-800">{project.title}</h2>
                        <p className="text-sm text-gray-600">{project.description}</p>
                    </a>
                ))}
                z
                
            </div>
        </div>
    );
};

export default Carousel;