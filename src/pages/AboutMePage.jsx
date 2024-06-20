import React from 'react'
import Button from '../components/Button/Button'
import './Styles/index.css'


const AboutMePage = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/Professional Modern CV Resume.pdf'; 
    link.download = 'CV_Kerly_Sarrias.pdf'; 
    link.click();
  };

  return (
    <div className='w-full flex flex-col items-center gap-20 mt-10 px-4'>
      <div className='w-full md:w-1/2'>
        <h1 className="brand">About Me</h1>
        <div className='flex flex-col w-full gap-1'>
          <h2 className="  dark:text-white  text-gray-700 font-bold uppercase text-3xl ">I am a full stack web developer and </h2>
          <h3 className='text-cyan-500 font-bold uppercase text-xl mb-3'>Agroindustrial Engineer.</h3>
          <p className="  dark:text-white  text-gray-700 ">I have extensive knowledge in a variety of key technologies. My experience ranges from front-end development with HTML, CSS, React and tools like Tailwind CSS and Bootstrap, to back-end development with JavaScript, Node.js, and SQL databases like MySQL and PostgreSQL, using Sequelize and Express.</p>
          <Button onClick={handleDownload} className="mt-4" color="primary" size="small" isRounded>Downland CV</Button>
        </div>
      </div>
      <div className='w-full md:w-4/6 relative'>
        <section className='w-full'>
          <h2 className="brand">Education</h2>
          <div className='flex w-full gap-4'>
            <div className='basis-1/2  dark:text-white  text-gray-700 '>
              <h3 className='text-cyan-500 font-bold uppercase'>Academlo</h3>
              <p className='year-label font-semibold'>2024</p>
              <p className='font-semibold'>Full Stack Web Development</p>
              <ul className='list-disc list-inside pl-5'>
                <li><a>Front-End Development with React</a></li>
                <li><a>Back-End Development with Node.js</a></li>
                <li><a>Foundations in HTML, CSS, and Javascript</a></li>
              </ul> 
            </div>
            <div className='basis-1/2 dark:text-white  text-gray-700'>
              <h3 className='text-cyan-500 font-bold uppercase mt-3'>Universidad Surcolombiana</h3>
              <p className='year-label font-semibold'>2018-2024</p>
              <p className='font-semibold'>Agro-industrial engineering</p>
              <ul className='list-disc list-inside pl-5'><li>Agro-industrial engineering</li></ul>
            </div>
          </div>
        </section>
        <section className='w-full my-8'>
          <h2 className="brand">Work experience</h2>
          <div className='flex w-full gap-4'>
            <div className='basis-1/2  dark:text-white  text-gray-700'>
              <h4 className='text-cyan-500 font-bold uppercase'>Alma del Huila</h4>
              <p className='year-label font-semibold'>2023-2024</p>
              <p>Head of specialty coffee processing</p>
            </div>
            <div className='basis-1/2 dark:text-white  text-gray-700'>
              <h4 className='text-cyan-500 font-bold uppercase'>Centro internacional de maquinaria pesada</h4>
              <p className='year-label'>2022-2023</p>
              <p>Administrative Assistant</p>
            </div>
          </div>
        </section>
      </div>
    </div>

      )
}

      export default AboutMePage