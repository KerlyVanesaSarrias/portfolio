const Card = ({ title, company, location, date, type, projectName, description }) => {
    return (
        <div className="container-e  ">
            <div className="flex md:flex-row flex-col">
                <div className="md:w-64 text-white">
                    <div className="md:p-5 p-3 rounded-xl bg-cyan-600">
                        <h4 className="text-2xl font-semibold mb-3">{title}</h4>
                        <span>{company}  {location}</span>
                        <p>{date}</p>
                        <p>{type}</p>
                    </div>
                </div>
                <div className="w-full dark-text md:mt-0 mt-5">
                    <div className="md:px-10"> 
                        <h4 className="text-3xl font-semibold mb-3">{projectName}</h4>
                        <p className="text-base text-justify">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;