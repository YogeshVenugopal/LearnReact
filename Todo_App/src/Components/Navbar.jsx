import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-[60px] md:h-[80px] bg-white shadow-2xs'>
            <div className='w-[90%] md:w-[80%] h-full flex items-center justify-center mx-auto border'>
                <h1 className='font-semibold md:font-bold md:text-2xl text-xl'>Todolist</h1>
            </div>
        </div>
    )
}

export default Navbar
