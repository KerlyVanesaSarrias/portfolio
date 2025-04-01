// eslint-disable-next-line react/prop-types
const ProjectCard = ( { image, title, description, technologies}) => {
    return (
        <div>
                <div  className="project-container">
                    <img src={image} className="project-image" />
                    <h2 className="project-tittle">{title}</h2>
                    <p className="project-description">{description}</p>
                    <p className="project-description" >{technologies}</p>
                </div>
        </div>
    )
}

export default ProjectCard
