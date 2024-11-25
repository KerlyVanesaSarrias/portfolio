const Card = ({ title, company, location, date, type, projectName, description }) => {
    return (
        <div className="container-e  text-white ">
            <div className="flex">
                <div className="w-64">
                    <div className="p-5 rounded-xl bg-cyan-600">
                        <h4 className="text-2xl font-semibold mb-3">{title}</h4>
                        <span>{company}  {location}</span>
                        <p>{date}</p>
                        <p>{type}</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="px-10"> 
                        <h4 className="text-3xl font-semibold mb-3">{projectName}</h4>
                        <p className="text-base text-justify">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;