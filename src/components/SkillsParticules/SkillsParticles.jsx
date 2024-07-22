
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSprings, animated } from 'react-spring';
import { FaReact,FaNodeJs, FaCss3Alt, FaHtml5, FaGithub } from 'react-icons/fa';
import { DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiJavascript } from "react-icons/si";  

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

const getRamdomInitialPorisionts = () => {
    return skills.map(() => ({x: Math.random() * 300, y: Math.random() * 300}));
}

const   SkillsParticles = () => {
    const [initialPositions, setInitialPositions] = useState(getRamdomInitialPorisionts());
    const containerRef = useRef(null);

    const getRandomPosition = useCallback(() => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const iconSize = 50;
        return {
            x: Math.random() * (containerWidth - iconSize),
            y: Math.random() * (containerHeight - iconSize),
        };
    }, []);

    const springs = useSprings(
        skills.length,
        skills.map((_, index) => {
            const { x, y } = initialPositions[index];
            return {
                loop: true,
                to: async (next) => {
                    while (true) {
                        const { x: newX, y: newY } = getRandomPosition();
                        await next({
                            transform: `translate3d(${newX}px, ${newY}px, 0)`,
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
        if (containerRef.current) {
            const positions = skills.map(() => getRandomPosition());
            setInitialPositions(positions);
        }
    }, [getRandomPosition]);

    return (
        <div className="relative md:w-full md:h-full w-80 h-80 overflow-hidden dark:bg-gray-800 bg-slate-300 rounded-lg justify-center items-center " ref={containerRef}>
        {springs.map((props, index) => {
            const IconComponent = skills[index].icon;
            return (
                <animated.div
                    key={index}
                    className="absolute will-change-transform"
                    style={props}
                >
                    <IconComponent className="w-14 h-14 2xl:w-20 2xl:h-20  dark:text-white text-black" />
                </animated.div>
            );
        })}
    </div>
    );
};

export default SkillsParticles;