import React from 'react'
import Card from './Card'
import person from '/Images/person.png'

const App = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Card profile={person} name="Sunantha" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente officia saepe vel perspiciatis? Qui ipsa tempore reiciendis distinctio molestias debitis!"/>
        <Card />
    </div>
  )
}

export default App
