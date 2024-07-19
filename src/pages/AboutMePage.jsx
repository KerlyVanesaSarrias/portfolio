import React from 'react'
import Button from '../components/Button/Button'
import './Styles/index.css'
import SkillsParticles from '../components/SkillsParticules/SkillsParticles';


const AboutMePage = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/Professional Modern CV Resume.pdf'; 
    link.download = 'CV_Kerly_Sarrias.pdf'; 
    link.click();
  };

  return (
  
<div className='w-full flex flex-col  gap-20 pt-10 pl-5'>
<h1 className="brand">About Me</h1>

  <div className='flex flex-col md:flex-row'>
    <div className='flex flex-col gap-1 md:w-1/2 w-full p-4'>
      <h2 className="  dark-text  font-bold uppercase text-4xl ">I am a full stack web developer and </h2>
      <h3 className='text-cyan-500 font-bold uppercase text-2xl mb-3'>Agroindustrial Engineer.</h3>
      <p className=" dark-text  text-lg text-justify ">I have extensive knowledge in a variety of key technologies. My experience ranges from front-end development with HTML, CSS, React and tools like Tailwind CSS and Bootstrap, to back-end development with JavaScript, Node.js, and SQL databases like MySQL and PostgreSQL, using Sequelize and Express.</p>
      <Button onClick={handleDownload} className="mt-8" color="primary" size="small" isRounded>Downland CV</Button>
    </div>

    <div className=' w-full md:w-1/2 md:px-36 px-5 flex-col justify-center items-center  '>
      <h2 className='brand mb-2'>Skills</h2>
      <SkillsParticles />
    </div>
  </div>

  <div className="container pb-20 p-8 ">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 dark-text ">
          <h2 className="text-xl font-bold mb-4 brand">Education</h2>
          <div className="flex flex-col gap-4">
            <div className="dark-target rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-cyan-500 uppercase">ACADEMLO</div>
                <div className="year-label font-semibold">2024</div>
              </div>
              <h3 className="text-lg font-bold mb-2">Full Stack Development Bootcamp</h3>
              <p className="">
              During the bootcamp I acquired skills in front-end and back-end. I developed skills in creating and maintaining web applications,
              applying responsive design principles and good coding practices.
              Additionally, I strengthened my ability to work in a team, solve complex technical problems, and adapt to development environments.
              </p>
            </div>
            <div className="dark-target rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-cyan-500">UNIVERSITY SURCOLOMBIANA</div>
                <div className="year-label font-semibold">2021 - 2025</div>
              </div>
              <h3 className="text-lg font-bold mb-2">Agro-industrial engineering</h3>
              <p className="">
              During my engineering career, I have developed solid skills in problem analysis and resolution, 
              solution design and development, and use of specialized tools and technologies. 
              I gained experience in research, experimentation and project management,
              standing out for my ability to communicate effectively and work as a team. My background includes
              a strong ethical commitment, adaptability and a focus on innovation, with a deep understanding of global and social contexts, as well as the implementation of quality management systems.
              </p>
            </div>
          </div>
      </div>
      <div className="w-full md:w-1/2"> 
        <h2 className="text-xl font-bold mb-4 brand">Experience</h2>
        <div className="flex flex-col gap-4 dark-text">
          <div className="dark-target rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold  text-cyan-500">AlMA DEL HUILA S.A.S</div>
              <div className="year-label font-semibold">2023 - 2024</div>
            </div>
            <h3 className="text-lg font-bold mb-2">Head of specialty coffee processing</h3>
            <p  className='text-base'>
            I did the professional internship for 6 months and worked the next 6 months in the natural coffee processing area of the company.
            I was leading a large group of workers in the area, with whom I developed work strategies that helped improve communication, effectiveness and performance of the processes. I managed
            to improve my teamwork skills and learned about the importance of effective communication.
            </p>
          </div>
          <div className="dark-target rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold  text-cyan-500">CENTRO INTERNACIONAL DE MAQUINARIA PESADA</div>
              <div className="year-label font-semibold">2022 - 2023</div>
            </div>
            <h3 className="text-lg font-bold mb-2">Administrative Assistant</h3>
            <p className='text-base'>
              I carried out administrative tasks and direct customer service. This included managing documentation and files, 
              performing reception and telephone support tasks, thus contributing to the general functioning of the company and
              maintaining positive relationships with customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      )
}

      export default AboutMePage