import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const AppLayout = () => {
  return (
    <div className='container-layout dark:bg-[#07233B] bg-[#eeee]'>
        <Header />
        <Outlet/>
    </div>
  )
}

export default AppLayout