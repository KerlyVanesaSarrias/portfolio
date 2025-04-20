import classNames from 'classnames'


// eslint-disable-next-line react/prop-types
const NavItems = ({text, onClick, isActive}) => {

    const classes = classNames('dark:hover:text-gray-400 hover:text-[#008DDA]  ', {
        'border-b-2 dark:border-white border-cyan-900': isActive,
    })

    return (
        <a onClick={onClick}  className={classes} >
        {text}
        </a>
    )
}

export default NavItems 