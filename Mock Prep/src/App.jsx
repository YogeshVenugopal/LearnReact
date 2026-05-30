import React from 'react'
import { ProductProvider } from './Context/ProductContext'
import { CartProvider } from './Context/CartContext'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoute from './Routes/AppRoute'

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <AppRoute/>
        </CartProvider>
      </ProductProvider>
    </Router>
  )
}

export default App
