import React from 'react'

const AboutMePage = () => {

  return (
    <div className='w-full flex gap-52  m-5'>
      <div className='w-1/3'>
        <div>
          <h1 className="bg-[#00334E] uppercase text-white  p-1 rounded -normal tracking-widest w-36 mb-5">About Me</h1>
          <h2 className=" text-white font-bold uppercase text-xl ">I am a full stack web developer and </h2>
          <h3 className='text-cyan-500 font-bold uppercase text-xl mb-3'>Agroindustrial Engineer.</h3>
          <p className=" text-white">I have extensive knowledge in a variety of key technologies. My experience ranges from front-end development with HTML, CSS, React and tools like Tailwind CSS and Bootstrap, to back-end development with JavaScript, Node.js, and SQL databases like MySQL and PostgreSQL, using Sequelize and Express.</p>
        </div>  

        <div className="w-full  flex gap-4 justify-center">
          <div className="w-full flex flex-col text-white border-2 rounded-lg p-4 shadow-md bg-[#343a40] justify-center">
            <h2 className="font-bold ">Horas de práctica</h2>
            <p className="text-3xl w-full text-center">+380</p>
          </div>
          <div className="w-full flex flex-col text-white border-2 rounded-lg p-4 shadow-md bg-[#343a40] justify-center">
            <h2 className="font-bold">Horas de teoria</h2>
            <p className="text-3xl w-full text-center">+300</p> 
          </div>
          <div className="w-full flex flex-col text-white border-2 rounded-lg p-4 shadow-md bg-[#343a40] justify-center">
            <h2 className="font-bold">Proyectos terminados</h2>
            <p className="text-3xl w-full text-center">7</p>
          </div>
        </div>
      </div>
      <div className='w-1/2  text-white flex-col justify-center'>
        <div>
          <h2 className="bg-[#00334E] uppercase font-semibold text-white p-1 rounded-normal tracking-widest w-36 mb-2">Education</h2>
          <div>
            <h3 className='text-cyan-500 font-bold uppercase'>Academlo</h3>
            <p>2024</p>
            <ul className='list-disc list-inside pl-5'>
              <li><a>Front-End Development with React</a></li>
              <li><a>Back-End Development with Node.js</a></li>
              <li><a>Foundations in HTML, CSS, and Javascript</a></li>
            </ul> 
          </div>

          <div>
            <h3 className='text-cyan-500 font-bold uppercase mt-3'>Universidad Surcolombiana</h3>
            <p>2024</p>
            <ul className='list-disc list-inside pl-5'><li>Agro-industrial engineering</li></ul>
          </div>
        </div>

        <div>
          <h3 className="bg-[#00334E] uppercase font-semibold text-white p-1 rounded-normal tracking-widest w-56 mt-3">Work experience</h3>
          <div>
            <h4 className='text-cyan-500 font-bold uppercase mt-2'>Alma del Huila</h4>
            <p>2023-2024</p>
            <p>Head of specialty coffee processing</p>
          </div>
          <h4 className='text-cyan-500 font-bold uppercase'>Centro internacional de maquinaria pesada</h4>
            <p>2022-2023</p>
            <p>Administrative Assistant</p>
          <div>

          </div>
        </div>
      </div>
    </div>

      )
}

      export default AboutMePage