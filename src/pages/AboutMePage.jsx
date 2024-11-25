import React from 'react'
import Button from '../components/Button/Button'
import './Styles/index.css'
import SkillsParticles from '../components/SkillsParticules/SkillsParticles';
import LogoImg from '../assets/logo2.png'
import effect1 from '../assets/effect-1.svg'
import effect2 from '../assets/effect-2.svg'
import Card from '../components/Card/Card';

const jobs = [
  {
    title: "Frontend Developer",
    company: "Weblab",
    location: "Remote",
    date: "April 2024",
    type: "Full Time",
    projectName: "Globin",
    description:
      "I participated in the creation of landing pages and user interfaces using React and Next.js. I carried out the integration with the Mercado Pago API to accept card payments and the creation of a blog using WordPress.",
  },
  {
    title: "Backend     Developer",
    company: "TechCorp",
    location: "Onsite",
    date: "April 2023",
    type: "Part Time",
    projectName: "TechVision",
    description:
      "Developed and optimized RESTful APIs using Node.js and Express. Implemented secure authentication mechanisms and database integration with PostgreSQL. nbdhwibdW",
  },
];

const education= [
  {
    institution: "University Iberoamericana",
    date: "2024 - Currently",
    course: "Sofware Engineering",
    type: "Professional", 
    description:
      "I am acquiring a solid foundation in programming and software development, learning to create scalable and secure applications. I am also developing skills in systems analysis, quality testing, and project management, with a focus on teamwork and innovation.",
  },
  {
    institution: "Talento Tech",
    date: "2024",
    course: "Full Stack Development Advanced",
    type: "Bootcam", 
    description:
      "During the bootcamp I acquired skills in front-end and back-end. I developed skills in creating and maintaining web applications, applying responsive design principles and good coding practices. Additionally, I strengthened my ability to work in a team, solve complex technical problems, and adapt to development environments.",
  },
  {
    institution: "Academlo",
    date: "2024",
    course: "Full Stack Development",
    type: "Bootcam",
    description:
      "During the bootcamp I acquired skills in front-end and back-end. I developed skills in creating and maintaining web applications, applying responsive design principles and good coding practices. Additionally, I strengthened my ability to work in a team, solve complex technical problems, and adapt to development environments.",
  },
  {
    institution: "University Surcolombiana",
    date: "2021 - 2025",
    course: "Agro-industrial Engineering",
    type: "Professional",
    description:
      "During my engineering career, I have developed strong skills in analysis and problem solving. I gained experience in research, experimentation and project management, standing out for my ability to communicate effectively and work as a team. My experience includes a strong ethical commitment, adaptability and focus on innovation.",
  },
];
const AboutMePage = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/CV_KerlyVanessaSarrias.pdf';
    link.download = 'CV_Kerly_Sarrias.pdf';
    link.click();
  };

  return (

    <div className='w-full flex flex-col  gap-14 pt-10 '>
      <div className='flex flex-col md:flex-row px-10'>
        <div className='order-2 md:order-1 md:w-2/5 md:px-20 px-5 flex-col justify-center items-center  md:mt-0 mt-20'>
          <div className=' absolute md:-bottom-40  md:left-0 -left-16 -z-10'><img src={effect1} alt="Logo" /></div>
          <div className='bg-slate-800  rounded-3xl border  '>
            <img className=" rounded-3xl" src={LogoImg} alt="" />
          </div>
        </div>
        <div className=' order-1 md:order-2 flex flex-col gap-1 md:w-3/5 md:pr-24 w-full '>
          <div className='absolute md:top-28 top-30 right-1 -z-30 '><img src={effect2} alt="Logo" /></div>
          <h1 className="brand w-32 ">About Me</h1>
          <h2 className="  dark-text mt-6 font-bold uppercase text-4xl 2xl:text-7xl  ">I am a React Frontend developer or</h2>
          <h3 className="  dark-text  font-bold uppercase text-[#008DDA] text-4xl 2xl:text-7xl  ">Node backend developer  </h3>
          <p className=" dark-text  text-lg  2xl:text-3xl mt-7 text-justify  ">I have a solid knowledge of a wide range of key technologies. My experience includes
            front-end development with React, HTML, CSS and tools like Tailwind CSS and Bootstrap, as well as back-end development with Node.js,
            databases like MySQL, PostgreSQL and MongoDB, using frameworks and libraries like Sequelize and Express.
          </p>
          <Button onClick={handleDownload} className="md:mt-10 " color="primary" size="small" isRounded>Downland CV</Button>
        </div>
      </div>

      <div className='mt-20 bg-skills'><SkillsParticles /></div>

      <div className=" pb-20 p-8  2xl:p-2 md:mt-12 mt-2">
        <div className=" gap-8 2xl:gap-16">
          <div className="w-full">
            <h2 className=" mb-4 brand">Experience</h2>
            <div className='flex gap-4 mb-10'>
              <h3 className=" text-white font-bold text-4xl 2xl:text-7xl ">MY WORK</h3>
              <h3 className='text-[#008DDA] font-bold text-4xl 2xl:text-7xl'>EXPERIENCE</h3>
            </div>

            <div className='grid md:grid-cols-2  grid-cols-1 gap-4'>
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  date={job.date}
                  type={job.type}
                  projectName={job.projectName}
                  description={job.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full dark-text mt-9 ">
          <h2 className=" mb-4 brand">Education</h2>
          <div className='flex gap-4 mb-10'>
              <h3 className=" text-white font-bold text-4xl 2xl:text-7xl ">MY</h3>
              <h3 className='text-[#008DDA] font-bold text-4xl 2xl:text-7xl'>EDUCATION</h3>
            </div>
            <div className='grid md:grid-cols-2  grid-cols-1 w-full gap-4'>
              {education.map((edu, index) => (
                <Card
                  key={index}
                  title={edu.course}
                  date={edu.date}
                  type={edu.type}
                  projectName={edu.institution}
                  description={edu.description}
                />
              ))}
            </div>
        </div>
      </div>
    </div>


  )
}

export default AboutMePage