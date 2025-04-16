import {
  FaReact, FaNodeJs, FaJs, FaJava, FaHtml5, FaGithub
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss
} from 'react-icons/si'
import { BsBootstrap } from 'react-icons/bs'

const SkillsParticles = () => {
  return (
    <div className="relative md:h-full  h-[400px]  overflow-hidden text-5xl">
      <div className="absolute top-[5%] left-[20%] md:top-[5%] md:left-[30%] animate-float">
        <FaReact className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]" />
      </div>
      <div className="absolute top-[20%] left-[5%] md:top-[25%] md:left-[20%] animate-float delay-1000">
        <FaNodeJs className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]" />
      </div>
      <div className="absolute top-[65%] left-[5%] md:top-[50%] md:left-[50%] animate-float delay-2000">
        <SiTypescript className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.7)]" />
      </div>
      <div className="absolute top-[10%] left-[60%] md:top-[15%] md:left-[60%] animate-float delay-1500">
        <FaJs className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.7)]" />
      </div>
      <div className="absolute top-[50%] left-[25%] md:top-[50%] md:left-[30%] animate-float delay-3000">
        <SiMongodb className="text-green-600 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]" />
      </div>
      <div className="absolute top-[70%] left-[55%] md:top-[70%] md:left-[60%] animate-float delay-2500">
        <SiPostgresql className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
      </div>
      <div className="absolute top-[30%] left-[65%] md:top-[40%] md:left-[75%] animate-float delay-1000">
        <FaJava className="text-red-500 drop-shadow-[0_0_15px_rgba(248,113,113,0.7)]" />
      </div>
      <div className="absolute top-[80%] left-[35%] md:top-[80%] md:left-[20%] animate-float delay-2000">
        <FaHtml5 className="text-orange-500 drop-shadow-[0_0_15px_rgba(251,146,60,0.7)]" />
      </div>
      <div className="absolute top-[35%] left-[40%] md:top-[30%] md:left-[45%] animate-float delay-500">
        <FaGithub className="dark:text-white text-black drop-shadow-[0_0_15px_rgba(11,11,11)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
      </div>
      <div className="absolute top-[55%] left-[65%] md:top-[65%] md:left-[80%] animate-float delay-3500">
        <SiTailwindcss className="text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.7)]" />
      </div>
      <div className="absolute top-[45%] left-[5%] md:top-[50%] md:left-[10%] animate-float delay-2500">
        <BsBootstrap className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]" />
      </div>
    </div>
  );
};

export default SkillsParticles;
