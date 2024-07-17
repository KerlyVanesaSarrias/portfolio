

import React from 'react';
import Fortune from '../../assets/Fortune cookie.png'
import Weather from '../../assets/WeatherApp.png'
import User from '../../assets/Users.png'
import RickAndMorty from '../../assets/RickAndMorty.png'
import Pokedex from '../../assets/Pokedex.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default () => {
    return (
        <Swiper className='px-10'
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
            <div className=''>
                <SwiperSlide>
                <a href='https://pokedex-omega-khaki.vercel.app/' target="_blank" rel="noopener noreferrer" className="project-container">
                        <img src={Pokedex} className="project-image" />
                        <h2 className="project-tittle">Pokedex</h2>
                        <p className="project-description">A web app that displays information about Pokémons</p>
                        <p className="project-description" >Tecnologies: React, JavaScript, CSS, HTML</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href='https://rick-and-morty-app-pi-umber.vercel.app/' target="_blank" rel="noopener noreferrer" className="project-container">
                        <img src={RickAndMorty} className="project-image" />
                        <h2 className="project-tittle">Rick and Morty App</h2>
                        <p className="project-description">A web app that displays characters and episodes from the Rick and Morty TV series</p>
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
                <SwiperSlide className='' >
                    <a href='https://fortune-cookie-omega.vercel.app/' target="_blank" rel="noopener noreferrer" className="project-container ">
                        <img src={Fortune} className="project-image" />
                        <h2 className="project-tittle">Fortune Cookie</h2>
                        <p className="project-description">A web app that generates random fortune cookie messages</p>
                        <p className="project-description" >Tecnologies: React, JavaScript, CSS, HTML</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href='https://users-crud-three.vercel.app/' target="_blank" rel="noopener noreferrer" className="project-container">
                        <img src={User} className="project-image" />
                        <h2 className="project-tittle -mb-1">User App</h2>
                        <p className="project-description ">A web app that allows users to create, read, update and delete user data   </p>
                        <p className="project-description -mt-2" >Tecnologies: React, JavaScript, CSS, HTML, Node.js, MySQL, Sequilize</p>
                    </a>
                </SwiperSlide>
            </div>
        </Swiper>

    );
};