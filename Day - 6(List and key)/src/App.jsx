import React from 'react'
import data from './data'
import Card from './Card'

const App = () => {

  console.log(data)
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='w-[80%] min-h-[40rem] grid grid-cols-3 grid-rows-3 gap-x-10 gap-y-20 mt-20'>
        {
          data.map((item) => (
            <Card 
            key={item.id}
            name={item.name} 
            price={item.price} 
            star={item.star} 
            productImage={item.productImage}
            description={item.description}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
