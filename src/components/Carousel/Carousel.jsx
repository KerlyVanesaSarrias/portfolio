
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { MdComputer } from "react-icons/md";
import { FaGithub} from "react-icons/fa";
import Button from '../Button/Button';


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
            <Swiper className='md:pl-10 md:pr-16 pl-8 pr-14 flex items-center'
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={60}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    770: {
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
                        <div onClick={() => handleCardClick(project)} className="cursor-pointer mb-10">
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
                    <div className="md:w-[600px] h-full w-full relative flex flex-col text-sm  md:p-6 p-2" >
                        <img src={selectedProject?.image} className="w-full h-auto rounded-lg" />
                        <p className="mt-7 font-light text-justify">{selectedProject?.description}</p>
                        <div className='flex gap-4 mt-3'>
                            <p className='font-bold'>Technologies: </p>
                            <p className=" dark-text">
                                {selectedProject?.technologies}
                            </p>
                        </div>

                        <div className='flex gap-10 items-center justify-center mt-5 '>
                            {selectedProject?.linkApp && (
                                <a
                                    href={selectedProject?.linkApp}
                                    target="_blank"
                                    className="mt-4 "
                                >
                                <Button isOnlyIcon= "icon" color="secondary">  <MdComputer /> </Button>
                                <p className='ml-3 extralight text-xs'>App</p>   
                                </a>
                            )}

                            {selectedProject?.linkGitHub && (
                                <a
                                    href={selectedProject?.linkGitHub}
                                    target="_blank"
                                    className="mt-4 "
                                >
                                    <Button isOnlyIcon= "icon" color="secondary">   <FaGithub/> </Button> 
                                    <p className='ml-2 extralight text-xs'>Front</p>
                                </a>
                            )}

                            {selectedProject?.linkGitHubBack && (
                                <a
                                    href={selectedProject?.linkGitHubBack}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4"
                                >
                                    <Button isOnlyIcon= "icon" color="secondary">   <FaGithub/> </Button> 
                                    <p className='ml-2 font-extralight text-xs'>Back</p>
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