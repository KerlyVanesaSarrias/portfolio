import classNames from 'classnames';
import React from 'react'

const Button = ({ color, size, children, onClick, isOnlyIcon = false, className }) => {
    const buttonClasses = classNames( {
        'bg-cyan-500 text-white rounded hover:bg-blue-500': color === 'primary',
        'bg-[#222]  text-white hover:bg-blue-400': color === 'secondary',
        'w-32 h-12 px-4 py-2': size === 'small',
        'w-48 h-12 px-4 py-2': size === 'medium',
        '!rounded-full h-12 w-12 text-xl flex justify-center items-center border-2 border-white': isOnlyIcon
    }, className);

    return (
        <button onClick={onClick}
            className={buttonClasses}>{children}</button>
    )
};



export default Button