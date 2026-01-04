

// eslint-disable-next-line react/prop-types
const Card = ({ title, company, location,  type, projectName, description }) => {
    return (
      <div className="relative p-5 dark:bg-sky-950 bg-slate-200 rounded-lg shadow-lg shadow-cyan-800 dark:shadow-slate-950 dark-text"> 
          <h4 className=" md:text-lg text-sm text-blue font-medium">{title}</h4>
          <h4 className=" font-semibold mb-2 text-blue">{projectName}</h4>
          <span className="text-xs md:text-sm block mb-1">{company}  {location}</span>   
          <p className="text-xs md:text-sm text-blue  mb-3">{type}</p>
        <div className="md:px-6 mt-5">
          <p className="text-xs md:text-sm  text-justify">{description}</p>
        </div>
      </div>
    );
  };

export default Card;