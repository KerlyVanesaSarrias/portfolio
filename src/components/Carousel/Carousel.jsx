
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';


export default () => {
    const { t,  } = useTranslation();
   const projects = t("projects", { returnObjects: true })

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
                    spaceBetween: 50,
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