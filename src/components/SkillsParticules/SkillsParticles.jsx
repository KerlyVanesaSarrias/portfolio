
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaReact,FaNodeJs, FaCss3Alt, FaHtml5, FaGithub } from 'react-icons/fa';
import { DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";  
import { TbBrandTypescript } from "react-icons/tb";

const skills = [
    { name: 'React', icon: FaReact },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'Tailwindcss', icon: SiTailwindcss},
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'Javascript', icon: SiJavascript},
    { name: 'TypeScript', icon: TbBrandTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Postgresql', icon: DiPostgresql },
    { name: 'Mongo db', icon: SiMongodb }
];

const   SkillsParticles = () => {
 

    return (
        <div className="flex flex-wrap justify-around items-center p-5">
        {skills.map(({ icon: Icon }, index) => (
          <div key={index} className="text-center m-4">
            <Icon className="text-6xl dark-text" />
          </div>
        ))}
      </div>
    );
};

export default SkillsParticles;