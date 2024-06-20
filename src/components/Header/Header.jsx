import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ABOUTME_PATH, CONTACT_PATH, HOME_PATH, PROJECTS_PATH } from '../../constants';
import NavItems from './NavItems';
import Theme from './Theme';
import LogoTwo from '../../assets/logo2.png'




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

  

  return (
    <>
    <div className=' w-full py-2 px-8 flex justify-between items-center dark:bg-[#070F2B] bg-[#31363F]'>
      <ul className='flex items-center'>
import LogoTwo from '../../assets/logo2.png'
        <li><img className='h-20 w-15 mr-2' src={LogoTwo} alt="" /></li>
        <li><a className='text-3xl text-white space-x-10 font-bold '> KERLY</a></li>
      </ul>
      
      <nav className='font-bold text-white cursor-pointer hidden md:flex space-x-8  ml-auto mr-5 '>
        <NavItems text={'HOME'} onClick={() => handleChangePage(HOME_PATH)} isActive={selectedItem===HOME_PATH}/>
        <NavItems text={'ABOUT ME'} onClick={() => handleChangePage(ABOUTME_PATH)} isActive={selectedItem===ABOUTME_PATH}/>
        <NavItems text={'PROJECTS'} onClick={() => handleChangePage(PROJECTS_PATH)} isActive={selectedItem===PROJECTS_PATH}/>
        <NavItems text={'CONTACT'} onClick={() => handleChangePage(CONTACT_PATH)} isActive={selectedItem===CONTACT_PATH}/>
      </nav>
      <div className='ml-auto mr-4 '><Theme/></div>
      <div className="md:hidden">
        <button  onClick={toggleMenu} className="focus:outline-none  text-white ">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
    
        {isOpen && (
          <div className='w-1/2 left-0 h-screen fixed top-0'>
          <div className="md:hidden bg-gray-700 bg-opacity-50 flex flex-col h-full  text-white w-full ml-auto  p-4 gap-4">
            <NavItems text={'HOME'} onClick={() => handleChangePage(HOME_PATH)} isActive={selectedItem===HOME_PATH}/>
            <NavItems text={'ABOUT ME'} onClick={() => handleChangePage(ABOUTME_PATH)} isActive={selectedItem===ABOUTME_PATH}/>
            <NavItems text={'PROJECTS'} onClick={() => handleChangePage(PROJECTS_PATH)} isActive={selectedItem===PROJECTS_PATH}/>
            <NavItems text={'CONTACT'} onClick={() => handleChangePage(CONTACT_PATH)} isActive={selectedItem===CONTACT_PATH}/>
          </div>
        </div>
      )}
    
    </>
  )
}

export default Header