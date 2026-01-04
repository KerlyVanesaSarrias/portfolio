import {
  FaReact, FaNodeJs, FaJs, FaJava, FaHtml5, FaGithub,
  FaVuejs,
  FaPython
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss
} from 'react-icons/si'
import { BsBootstrap } from 'react-icons/bs'

const SkillsParticles = () => {
  return (
    <div className="relative lg:h-full w-full h-[500px] overflow-hidden text-5xl">
      <div className="absolute top-[10%] left-[10%] md:top-[10%] md:left-[20%] animate-float flex flex-col items-center">
        <FaReact className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]" />
        <p className='text-sm text-cyan-500'>React</p>
      </div>
      <div className="absolute top-[30%] left-[2%] md:top-[30%] md:left-[10%] animate-float delay-1000 flex flex-col items-center">
        <FaNodeJs className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]" />
        <p className='text-sm text-green-500'>Node.js</p>
      </div>
      <div className="absolute top-[60%] left-[2%] md:top-[30%] md:left-[55%] animate-float delay-2000 flex flex-col items-center">
        <SiTypescript className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.7)]" />
        <p className='text-sm text-blue-400'>TypeScript</p>
      </div>
      <div className="absolute top-[80%] left-[55%] md:top-[85%] md:left-[45%] animate-float delay-2500 flex flex-col items-center">
        <FaJs className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.7)]" />
        <p className='text-sm text-yellow-400'>JavaScript</p>
      </div>
      <div className="absolute top-[40%] left-[60%] md:top-[55%] md:left-[45%] animate-float delay-3000 flex flex-col items-center">
        <SiMongodb className="text-green-600 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]" />
        <p className='text-sm text-green-600'>MongoDB</p>
      </div>
      <div className="absolute top-[60%] left-[40%] md:top-[55%] md:left-[70%] animate-float delay-2500 flex flex-col items-center">
        <SiPostgresql className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
        <p className='text-sm text-blue-500'>PostgreSQL</p>
      </div>
      <div className="absolute top-[30%] left-[85%] md:top-[30%] md:left-[80%] animate-float delay-1000 flex flex-col items-center">
        <FaJava className="text-red-500 drop-shadow-[0_0_15px_rgba(248,113,113,0.7)]" />
        <p className='text-sm text-red-500'>Java</p>
      </div>
      <div className="absolute top-[80%] left-[25%] md:top-[80%] md:left-[30%] animate-float delay-2000 flex flex-col items-center">
        <FaHtml5 className="text-orange-500 drop-shadow-[0_0_15px_rgba(251,146,60,0.7)]" />
        <p className='text-sm text-orange-500'>HTML5</p>
      </div>
      <div className="absolute top-[25%] left-[40%] md:top-[30%] md:left-[35%] animate-float delay-500 flex flex-col items-center">
        <FaGithub className="dark:text-white text-black drop-shadow-[0_0_15px_rgba(11,11,11)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
        <p className='text-sm dark:text-white text-black'>GitHub</p>
      </div>
      <div className="absolute top-[60%] left-[80%] md:top-[80%] md:left-[65%] animate-float delay-3500 flex flex-col items-center">
        <SiTailwindcss className="text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.7)]" />
        <p className='text-sm text-sky-400'>Tailwind CSS</p>
      </div>
      <div className="absolute top-[45%] left-[20%] md:top-[55%] md:left-[20%] animate-float delay-2500 flex flex-col items-center">
        <BsBootstrap className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]" />
        <p className='text-sm text-purple-500'>Bootstrap</p>
      </div>
      <div className="absolute top-[10%] left-[70%] md:top-[10%] md:left-[70%] animate-float delay-1500 flex flex-col items-center">
        <FaVuejs className='text-blue-800 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]'/>
        <p className='text-sm text-blue-800'>Vue.js</p>
      </div>
      <div className="absolute top-[4%] left-[40%] md:top-[4%] md:left-[45%] animate-float flex flex-col items-center">
        <FaPython className="text-yellow-500 drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]" />
        <p className='text-sm text-yellow-500'>Python</p>
      </div>
    </div>
  );
};

export default SkillsParticles;
