
import React, { useCallback, useRef } from 'react';
import { useSprings, animated } from 'react-spring';
import { FaReact, FaCss3Alt, FaHtml5, FaGitAlt } from 'react-icons/fa';

const skills = [
    { name: 'React', icon: FaReact },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'Git', icon: FaGitAlt },
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
        return { x: 0, y: 0}
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
                            transform: `translate3d(${Math.random() * 665}px, ${Math.random() * 420}px, 0)`,
                            opacity: Math.random() * 0.5 + 0.5,
                            config: { duration: getRandomDuration() },
                        });
                    }
                },
                from: { transform: `translate3d(${x}px, ${y}px, 0)`, opacity: 0.5 },
            };
        })
    );

    return (
        <div className="w-full h-full overflow-hidden bg-gray-900  rounded-full border-cyan-500" ref={containerRef}>
            {springs.map((props, index) => {
                const IconComponent = skills[index].icon;
                return (
                    <animated.div
                        key={index}
                        className="absolute will-change-transform"
                        style={props}
                    >
                        <IconComponent className="w-12 h-12 text-white" />
                    </animated.div>
                );
            })}
        </div>
    );
};

export default SkillsParticles;
