import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ABOUTME_PATH, CONTACT_PATH, HOME_PATH, PROJECTS_PATH } from '../../constants';
import NavItems from './NavItems';
import Theme from './Theme';
import LogoOne from '../../assets/logo1.png'
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';



const Header = () => {

  const { i18n } = useTranslation();
  const { t } = useTranslation();

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <div className=' w-full md:py-6 py-4  dark-text flex justify-between  items-center sticky top-0  bg-gradient-to-b dark:from-[#31475f] from-[#6d96a1] backdrop-blur-sm transition-colors duration-300 z-10'>
      <ul className='flex items-center md:pl-20 pl-10'>
        <li><img className='md:h-16 md:w-16 w-9 h-9  mr-2' src={LogoOne} alt="" /></li>
        <li><a className='md:text-2xl text-sm font-light space-x-10  '> KERLY</a></li>
      </ul>
      <div className='flex md:pr-20 pr-10'>
        <nav className='font-light 2xl:text-2xl cursor-pointer hidden md:flex space-x-10 2xl:space-x-12  pl-52 mr-8'>
          <NavItems text={t("header.home")} onClick={() => handleChangePage(HOME_PATH)} isActive={selectedItem===HOME_PATH}/>
          <NavItems text={t("header.aboutMe")} onClick={() => handleChangePage(ABOUTME_PATH)} isActive={selectedItem===ABOUTME_PATH}/>
          <NavItems text={t("header.projects")} onClick={() => handleChangePage(PROJECTS_PATH)} isActive={selectedItem===PROJECTS_PATH}/>
          <NavItems text={t("header.contact")} onClick={() => handleChangePage(CONTACT_PATH)} isActive={selectedItem===CONTACT_PATH}/>
        </nav>
        <div className='md:mr-5 md:mt-0 mt-2'><Theme/></div>
        <div className='flex md:gap-4 gap-1 md:mr-0 mr-2'>
        <button
          onClick={() => changeLanguage('en')}
          className="px-2 py-1 font-medium border rounded  hover:scale-105"
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className="px-2 py-1 font-medium border rounded  hover:scale-105"
        > 
          ES
        </button>
      </div>
        <div className="md:hidden">
        <button  onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      </div>
    </div>
    <div className={classesMenuMobile}>
      <div className="md:hidden dark:bg-[#0f2a44f1] bg-slate-400 dark-text flex flex-col h-full w-full ml-auto  p-4 gap-4">
        <NavItems text={'HOME'} onClick={() => {handleChangePage(HOME_PATH); closeMenu()}} isActive={selectedItem===HOME_PATH}/>
        <NavItems text={'ABOUT ME'} onClick={() => {handleChangePage(ABOUTME_PATH); closeMenu()}} isActive={selectedItem===ABOUTME_PATH}/>
        <NavItems text={'PROJECTS'} onClick={() => {handleChangePage(PROJECTS_PATH); closeMenu()}} isActive={selectedItem===PROJECTS_PATH}/>
        <NavItems text={'CONTACT'} onClick={() => {handleChangePage(CONTACT_PATH);  closeMenu()}} isActive={selectedItem===CONTACT_PATH}/>
      </div>
    </div>
    </>
  )
}

export default Header