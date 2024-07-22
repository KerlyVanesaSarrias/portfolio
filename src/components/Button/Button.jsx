import classNames from 'classnames';
import React from 'react'

const Button = ({ color, size, children, onClick, isOnlyIcon = false, className }) => {
    const buttonClasses = classNames( {
        'bg-cyan-500 text-white rounded hover:bg-blue-500': color === 'primary',
        'bg-[#222]  text-white hover:bg-blue-400': color === 'secondary',
        'w-36 h-12 2xl:w-52 2xl:h-16 2xl:text-2xl px-4 py-2 font-semibold ': size === 'small',
        'w-52 h-12 px-4 py-2 font-semibold': size === 'medium',
        '!rounded-full h-12 w-12 2xl:w-16 2xl:h-16 2xl:text-3xl text-xl flex justify-center items-center border-2 border-white': isOnlyIcon
    }, className);

    return (
        <button onClick={onClick}
            className={buttonClasses}>{children}</button>
    )
};



export default Button