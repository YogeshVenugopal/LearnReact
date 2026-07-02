import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='w-full min-h-screen flex'>
        <Sidebar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout
