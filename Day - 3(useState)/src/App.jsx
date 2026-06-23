import React from 'react'
import Card from './Card'
import person from '/Images/person.png'

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-3'>
      <h1 className='font-bold text-3xl'>Click the like button </h1>
      <Card profile={person}/>
    </div>
  )
}

export default App
