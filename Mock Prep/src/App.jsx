import React from 'react'
import { ProductProvider } from './Context/ProductContext'

const App = () => {
  return (
    <>
      <ProductProvider>
        <h1></h1>
      </ProductProvider>
    </>
  )
}

export default App
