import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'

const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home/>}/>
    </Routes>
  )
}

export default AppRoute
