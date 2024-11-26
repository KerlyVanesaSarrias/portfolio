import classNames from 'classnames'
import React from 'react'

const NavItems = ({text, onClick, isActive}) => {

    const classes = classNames('hover:text-gray-400', {
        'border-b-2 dark:border-white': isActive,
    })

    return (
        <a onClick={onClick}  className={classes} >
        {text}
        </a>
    )
}

export default NavItems 