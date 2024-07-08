
// import { Autoplay, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';




//     const Carousel = () => {



//     return (



//     );
// };

// export default Carousel;

import React from 'react';
import Fortune from '../../assets/Fortune cookie.png'
import Weather from '../../assets/WeatherApp.png'
import User from '../../assets/Users.png'
import RickAndMorty from '../../assets/RickAndMorty.png'
import Pokedex from '../../assets/Pokedex.png'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const projects = [
//     {
//         id: 1,
//         image: [Fortune],
//         link: 'https://fortune-cookie-omega.vercel.app/',
//         title: 'Fortune Cookie',
//         description: 'A web app that generates random fortune cookie messages'
//     },
//     // {
//     //     id: 2,
//     //     image: [Weather],
//     //     link: 'https://weather-app-pi-ten-18.vercel.app/',
//     //     title: 'Weather App',
//     //     description: 'A web app that displays current weather and forecast for a given location'
//     // },
//     {
//         id: 3,
//         image: [User],
//         link: 'https://users-crud-three.vercel.app/',
//         title: 'Users CRUD',
//         description: 'A web app that allows users to create, read, update and delete user data',

//     },
//     {
//         id: 4,
//         image: [RickAndMorty],
//         link: 'https://rick-and-morty-app-pi-umber.vercel.app/',
//         title: 'Rick and Morty App',
//         description: 'A web app that displays characters and episodes from the Rick and Morty TV series'
//     },
//     {
//         id: 5,
//         image: [Pokedex],
//         link: 'https://pokedex-omega-khaki.vercel.app/',
//         title: 'Pokedex',
//         description: 'A web app that displays information about Pokémons'
//     },
// ]


export default () => {
    return (
        <Swiper

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
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            <div className='md:flex-row flex-col'>
                <SwiperSlide className='' >
                    <a href='https://fortune-cookie-omega.vercel.app/' target="_blank" rel="noopener noreferrer" className="project-container">
                        <img src={Fortune} className="project-image" />
                        <h2 className="project-tittle">Fortune Cookie</h2>
                        <p className="project-description">A web app that generates random fortune cookie messages</p>
                        <p className="project-description" >Tecnologies: React, JavaScript, CSS, HTML</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://weather-app-pi-ten-18.vercel.app/' target="_blank" rel="noopener noreferrer" className="project-container">
                        <img src={Weather} className="project-image" />
                        <h2 className="project-tittle">Weather App</h2>
                        <p className="project-description">A web app that displays current weather and forecast for a given location</p>
                        <p className="project-description" >Tecnologies: React, JavaScript, CSS, HTML</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href='https://users-crud-three.vercel.app/' target="_blank" rel="noopener noreferrer" className="project-container">
                        <img src={User} className="project-image" />
                        <h2 className="project-tittle">Weather App</h2>
                        <p className="project-description">A web app that displays current weather and forecast for a given location</p>
                        <p className="project-description" >Tecnologies: React, JavaScript, CSS, HTML</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href='https://weather-app-pi-ten-18.vercel.app/' target="_blank" rel="noopener noreferrer" className="project-container">
                        <img src={Weather} className="project-image" />
                        <h2 className="project-tittle">Weather App</h2>
                        <p className="project-description">A web app that displays current weather and forecast for a given location</p>
                        <p className="project-description" >Tecnologies: React, JavaScript, CSS, HTML</p>
                    </a>
                </SwiperSlide>
            </div>
            ...
        </Swiper>

    );
};