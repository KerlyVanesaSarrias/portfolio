

import React from 'react';
import Fortune from '../../assets/Fortune cookie.png'
import Weather from '../../assets/WeatherApp.png'
import User from '../../assets/Users.png'
import RickAndMorty from '../../assets/RickAndMorty.png'
import Pokedex from '../../assets/Pokedex.png'
import SocialNet from '../../assets/SocialNet.png'
import HuilaTravel from '../../assets/HuilaTravel.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectCard from './ProjectCard';


export default () => {
    const projects = [
        {
            title: "Huila Travel",
            description: "A web app that displays information about Pokémons",
            technologies: "React, JavaScript, CSS, HTML, Node.js, MongoDB",
            image: HuilaTravel,
            link: "https://frontendhuilatravel-1.onrender.com",
        },
        {
            title: "Social Net",
            description: "A web app that displays information about Pokémons",
            technologies: "React, JavaScript, CSS, HTML, Node.js, MongoDB",
            image: SocialNet,
            link: "https://frontend-social-net-b76a.onrender.com",
        },
        {
            title: "Pokedex",
            description: "A web app that displays information about Pokémons",
            technologies: "React, JavaScript, CSS, HTML",
            image: Pokedex,
            link: "https://pokedex-omega-khaki.vercel.app/",
        },
        {
            title: "Rick and Morty App",
            description: "A web app that displays characters and episodes from the Rick and Morty TV series",
            technologies: "React, JavaScript, CSS, HTML, Node.js, MongoDB",
            image: RickAndMorty,
            link: "https://rick-and-morty-app-pi-umber.vercel.app/",
        },
        {
            title: "Weather App",
            description: "A web app that displays current weather and forecast for a given location",
            technologies: "React, JavaScript, CSS, HTML",
            image: Weather,
            link: "https://weather-app-pi-ten-18.vercel.app/",
        },
        {
            title: "Fortune Cookie",
            description: "A web app that generates random fortune cookie messages",
            technologies: "React, JavaScript, CSS, HTML",
            image: Fortune,
            link: "https://fortune-cookie-omega.vercel.app/",
        },
        {
            title: "User App",
            description: "A web app that allows users to create, read, update and delete user data",
            technologies: "React, JavaScript, CSS, HTML, MySQL, MongoDB, Sequelize",
            image: User,
            link: "https://users-crud-three.vercel.app/",
        },
    ];

    return (
        <Swiper className='pl-10 pr-16'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 150,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 75,
                },
            }}
        >
            {projects.map((project,index) => (
                <SwiperSlide key={index}>
                    <ProjectCard {...project}
                    />
                </SwiperSlide>
            )) 
            }
        
        </Swiper>

    );
};