// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, title, description }) => {
    return (
        <div>
            <div className="project-container dark-text">
            <h2 className="project-tittle">{title}</h2>
                <img src={image} className="project-image" />
                <p className="project-description">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
