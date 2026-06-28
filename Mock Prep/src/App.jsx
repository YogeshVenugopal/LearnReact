import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Order from './Pages/Order'
import Cart from './Pages/Cart'
import Product from './Pages/Product'

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </Router>
  )
}

export default App
