import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ABOUTME_PATH, CONTACT_PATH, HOME_PATH, PROJECTS_PATH } from '../../constants';
import NavItems from './NavItems';
import Theme from './Theme';
import ReactSwitch from 'react-switch';



const Header = () => {

  const [selectedItem, setSelectedItem] = useState()
  const navigate = useNavigate();
  const handleChangePage = (routePath) => {
    navigate(routePath);
    setSelectedItem(routePath)
  }

  

  return (
    <div className=' w-full py-2 px-8 flex justify-between items-center bg-[#070F2B]'>
      <ul className='flex items-center'>
        <li><img className='h-20 w-15 mr-2' src="/src/assets/logo2.png" alt="" /></li>
        <li><a className='text-3xl text-white space-x-10 font-bold '> KERLY</a></li>
      </ul>
      
      <nav className='flex  space-x-8 font-bold text-white cursor-pointer'>
        <NavItems text={'HOME'} onClick={() => handleChangePage(HOME_PATH)} isActive={selectedItem===HOME_PATH}/>
        <NavItems text={'ABOUT ME'} onClick={() => handleChangePage(ABOUTME_PATH)} isActive={selectedItem===ABOUTME_PATH}/>
        <NavItems text={'PROJECTS'} onClick={() => handleChangePage(PROJECTS_PATH)} isActive={selectedItem===PROJECTS_PATH}/>
        <NavItems text={'CONTACT'} onClick={() => handleChangePage(CONTACT_PATH)} isActive={selectedItem===CONTACT_PATH}/>
        <div><Theme/></div>
      </nav>
    
    </div>
  )
}

export default Header