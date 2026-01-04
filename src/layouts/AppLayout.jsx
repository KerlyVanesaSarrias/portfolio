import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import Footer from '../components/Footer/Footer'

const AppLayout = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen w-full'>
        <Header />
        <div className="flex w-full">
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default AppLayout