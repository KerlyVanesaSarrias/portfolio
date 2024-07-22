import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import Footer from '../components/Footer/Footer'

const AppLayout = () => {
  return (
    <div className=' flex flex-col min-h-screen w-full dark:bg-[#31363F] bg-[#eeeeee]" '>
        <Header />
        <div className="flex-grow">
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default AppLayout