
import React, { useCallback, useEffect, useRef } from 'react';
import { useSprings, animated } from 'react-spring';
import { FaReact,FaNodeJs, FaCss3Alt, FaHtml5, FaGithub } from 'react-icons/fa';
import { DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { useMediaQuery } from 'react-responsive';

const skills = [
    { name: 'React', icon: FaReact },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'Git', icon: FaGithub },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Postgresql', icon: DiPostgresql },
    { name: 'Tailwindcss', icon: SiTailwindcss},
    { name: 'Javascript', icon: SiJavascript},
];

const getRandomDuration = () => Math.random() * 5000 + 5000;


const SkillsParticles = () => {
    const containerRef = useRef(null);


    const getRandomPosition = useCallback(() => {
        if(containerRef.current) {
            return {
                x: Math.random() * containerRef.current.innerWidth,
                y: Math.random() * containerRef.current.innerHeight,
            }
        }
        return { x: 100, y: 100}
    }, []);

    const springs = useSprings(
        skills.length,
        skills.map(() => {
            const { x, y } = getRandomPosition();
            console.log('x y:', x, y)
            return {
                loop: true,
                to: async (next) => {
                    while (true) {
                        await next({
                            transform: 
                             `translate3d(${Math.random() * 250}px, ${Math.random() * 300}px, 0)`,
                            opacity: Math.random() * 0.5 + 0.5,
                            config: { duration: getRandomDuration() },
                        });
                    }
                },
                from: { transform: `translate3d(${x}px, ${y}px, 0)`, opacity: 0.5 },
            };
        })
    );

    useEffect(() => {
        console.log('container', containerRef.current.innerWidth)
    }, [])

    return (

            <div className="w-full md:h-full h-96 overflow-hidden dark:bg-gray-700 bg-slate-300 md:p-10 p-2 rounded-full" ref={containerRef}>
                {springs.map((props, index) => {
                    const IconComponent = skills[index].icon;
                    return (
                        <animated.div
                            key={index}
                            className="absolute will-change-transform"
                            style={props}
                        >
                            <IconComponent className="w-12 h-12 dark-text" />
                        </animated.div>
                    );
                })}
            </div>
    );
};

export default SkillsParticles;
