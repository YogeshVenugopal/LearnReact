import React from 'react'
import Card from './Card'
const App = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-3'>
      <h1 className='font-bold text-3xl'>Click the like button </h1>
      <Card />
    </div>
  )
}

export default App
