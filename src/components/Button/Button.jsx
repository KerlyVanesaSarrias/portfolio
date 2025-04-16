import classNames from 'classnames';
    
// eslint-disable-next-line react/prop-types
const Button = ({ color, size, children, onClick, isOnlyIcon = false, className }) => {
    const buttonClasses = classNames( {
        'bg-[#008DDA] text-white rounded-[40px] font-normal  hover:scale-105 hover:bg-blue-500': color === 'primary',
        ' dark-text dark:hover:bg-[#008DDA]  hover:scale-105 hover:bg-gray-300  drop-shadow-[0_0_15px_rgba(11,11,11)]': color === 'secondary',
        'w-48 h-12 2xl:w-52 2xl:h-16 2xl:text-2xl px-5  font-medium ': size === 'small',
        'w-full h-12 px-4 py-2 font-semibold': size === 'medium',
        '!rounded-full h-12 w-12 2xl:w-16 2xl:h-16 2xl:text-3xl text-xl flex justify-center items-center border-2 border-gray-400 dark:border-white': isOnlyIcon
    }, className);

    return (
        <button onClick={onClick}
            className={buttonClasses}>{children}</button>
    )
};



export default Button