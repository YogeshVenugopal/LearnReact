import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full min-h-screen'>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className='w-[calc(100vw-300px)]'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout
