import React from 'react'
import { ProductProvider } from './Context/ProductContext'
import { CartProvider } from './Context/CartContext'

const App = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <h1></h1>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
