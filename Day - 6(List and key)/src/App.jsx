import React from 'react'
import data from './data'
import Card from './Card'

const App = () => {

  console.log(data)
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='w-[70%] min-h-[40rem] grid grid-cols-3 gap-10 my-20'>
        {
          data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              price={item.price}
              star={item.star}
              productImage={item.productImage}
              description={item.description} />
          ))
        }
      </div>
    </div>
  )
}

export default App
