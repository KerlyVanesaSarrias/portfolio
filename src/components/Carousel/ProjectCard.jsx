
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProjectCard = ( {link, image, tittle, description, technologies}) => {
    return (
        <div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-container">
                    <img src={image} className="project-image" />
                    <h2 className="project-tittle">{tittle}</h2>
                    <p className="project-description">{description}</p>
                    <p className="project-description" >{technologies}</p>
                </a>
        </div>
    )
}

export default ProjectCard
