
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Carousel = () => {
    const { t, } = useTranslation();
    const projects = t("projects", { returnObjects: true })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <Swiper className='md:pl-10 md:pr-16 pl-8 pr-14'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={60}
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
                        spaceBetween: 50,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div onClick={() => handleCardClick(project)} className="cursor-pointer mt-28 md:mt-0 md:mb-10 mb-20">
                            <ProjectCard {...project} />
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
            <div >
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={selectedProject?.title}
                >
                    <div className="md:w-[600px] h-full w-full relative flex flex-col text-sm overflow-hidden md:p-10 p-2" >
                        <img src={selectedProject?.image} className="w-full h-auto" />
                        <p className="mt-7 font-light text-justify">{selectedProject?.description}</p>
                        <div className='flex gap-4 mt-3'>
                            <p className='font-bold'>Technologies: </p>
                            <p className=" dark-text">
                                {selectedProject?.technologies}
                            </p>
                        </div>

                        <div className='flex gap-10 text-sm  items-center justify-center italic dark:text-[#008DDA]  text-gray-700 underline'>
                            {selectedProject?.linkApp && (
                                <a
                                    href={selectedProject?.linkApp}
                                    target="_blank"
                                    className="mt-4 "
                                >
                                    Ver App Web
                                </a>
                            )}

                            {selectedProject?.linkGitHub && (
                                <a
                                    href={selectedProject?.linkGitHub}
                                    target="_blank"
                                    className="mt-4 italic "
                                >
                                    Ver GiHub
                                </a>
                            )}


                            {selectedProject?.linkGitHubBack && (
                                <a
                                    href={selectedProject?.linkGitHubBack}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4"
                                >
                                    Ver GiHub Backend 
                                </a>
                            )}

                        </div>
                    </div>
                    <div>

                    </div>
                </Modal>
            </div>

        </>

    );
};


export default Carousel