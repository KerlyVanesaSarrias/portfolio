import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ABOUTME_PATH, CONTACT_PATH, HOME_PATH, PROJECTS_PATH } from '../../constants';

const Header = () => {
  const navigate = useNavigate();

  const handleChangePage = (routePath) => {
    navigate(routePath);
  }
  return (
    <div className='header'>
      <ul>
        <li><a onClick={() => handleChangePage(HOME_PATH)}>Home</a></li>
        <li><a onClick={() => handleChangePage(ABOUTME_PATH)}>About me</a></li>
        <li><a onClick={() => handleChangePage(PROJECTS_PATH)}>Projects</a></li>
        <li><a onClick={() => handleChangePage(CONTACT_PATH)}>Contact</a></li>
      </ul>
    </div>
  )
}

export default Header