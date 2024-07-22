import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ABOUTME_PATH, CONTACT_PATH, HOME_PATH, PROJECTS_PATH } from '../../constants';
import NavItems from './NavItems';
import Theme from './Theme';
import LogoOne from '../../assets/logo1.png'
import classNames from 'classnames';




const Header = () => {

  const [selectedItem, setSelectedItem] = useState()
  const navigate = useNavigate();

  const handleChangePage = (routePath) => {
    console.log('routePath', routePath)
    navigate(routePath);
    setSelectedItem(routePath)
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const classesMenuMobile = classNames('w-1/2 top-0 transition-all h-screen fixed top-0 z-10', {
    'left-0': isOpen,
    '-left-full': !isOpen
  })

  return (
    <>
    <div className=' w-full py-2 px-8 flex justify-between items-center dark:bg-[#222] bg-[#31363F]'>
      <ul className='flex items-center'>
        <li><img className='h-16 w-16  mr-2' src={LogoOne} alt="" /></li>
        <li><a className='md:text-3xl text-xl 2xl:text-3xl text-white space-x-10 font-bold '> KERLY</a></li>
      </ul>
      <div className='flex'>
        <nav className='font-bold text-white 2xl:text-2xl cursor-pointer hidden md:flex space-x-8 2xl:space-x-12   pl-52 mr-10'>
          <NavItems text={'HOME'} onClick={() => handleChangePage(HOME_PATH)} isActive={selectedItem===HOME_PATH}/>
          <NavItems text={'ABOUT ME'} onClick={() => handleChangePage(ABOUTME_PATH)} isActive={selectedItem===ABOUTME_PATH}/>
          <NavItems text={'PROJECTS'} onClick={() => handleChangePage(PROJECTS_PATH)} isActive={selectedItem===PROJECTS_PATH}/>
          <NavItems text={'CONTACT'} onClick={() => handleChangePage(CONTACT_PATH)} isActive={selectedItem===CONTACT_PATH}/>
        </nav>
        <div className='mr-5'><Theme/></div>
        <div className="md:hidden">
        <button  onClick={toggleMenu} className="focus:outline-none text-white ">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      </div>
    </div>
    <div className={classesMenuMobile}>
      <div className="md:hidden bg-gray-700 flex flex-col h-full  text-white w-full ml-auto  p-4 gap-4">
        <NavItems text={'HOME'} onClick={() => {handleChangePage(HOME_PATH); closeMenu()}} isActive={selectedItem===HOME_PATH}/>
        <NavItems text={'ABOUT ME'} onClick={() => {handleChangePage(ABOUTME_PATH); closeMenu()}} isActive={selectedItem===ABOUTME_PATH}/>
        <NavItems text={'PROJECTS'} onClick={() => {handleChangePage(PROJECTS_PATH); closeMenu()}} isActive={selectedItem===PROJECTS_PATH}/>
        <NavItems text={'CONTACT'} onClick={() => {handleChangePage(CONTACT_PATH); ; closeMenu()}} isActive={selectedItem===CONTACT_PATH}/>
      </div>
    </div>
    </>
  )
}

export default Header