import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import Footer from '../components/Footer/Footer'

const AppLayout = () => {
  return (
    <div className='container-layout w-full dark:bg-[#31363F] bg-[#eeee] flex-col justify-between'>
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout