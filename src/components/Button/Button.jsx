import classNames from 'classnames';
import React from 'react'

const Button = ({ color, size, children, onClick, isOnlyIcon = false }) => {
    const buttonClasses = classNames( {
        'bg-cyan-500 text-white': color === 'primary',
        'bg-red-500 text-white': color === 'secondary',
        'w-32 h-12 px-4 py-2': size === 'small',
        'w-48 h-12 px-4 py-2': size === 'medium',
        '!rounded-full h-12 w-12  flex justify-center items-center border-2 border-white': isOnlyIcon
    });

    return (
        <button onClick={onClick}
            className={buttonClasses}>{children}</button>
    )
};



export default Button