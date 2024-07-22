import React from 'react'


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
            <footer className='  border-gray-500 align-bottom 2xl:text-2xl  border-t- w-auto text-gray-500 text-center'>
                <hr className=' border-gray-500'></hr>
                <p className='p-4' >© {currentYear}, copyright all right reserved.</p>
            </footer>
    
    )
}

export default Footer
