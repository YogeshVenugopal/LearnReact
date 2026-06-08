import React, { useState } from 'react'

const App = () => {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[showPassword, setShowPassword] = useState(false);

  const[validEmail, setValidEmail] = useState(false);
  const[validPassword, setValidPassword] = useState(false);

  const handleValidEmail = (value) => {
    const isValid = value.endsWith("@gmail.com");
    setValidEmail(isValid);
  }

  const handleValidPassword = (value) => {
    const isValid = value.length > 5;
    setValidPassword(isValid);
  }

  return (
    <div className='w-full h-screen bg-olive-300/50 flex items-center justify-center'>
        <form  method='POST' className='w-[30rem] min-h-[25rem] bg-white flex flex-col items-center justify-around py-10 rouded-[8px]'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='font-bold text-2xl'>Login</h1>
            <h3>Welcome to the login page for this website</h3>
          </div>

          <div className='flex flex-col justify-evenly w-[80%] gap-3'>
            <label htmlFor="email" className='flex flex-col gap-2'>
            <p>Email</p>
            <input 
              type="text" 
              required 
              placeholder='eg. john@gmail.com' 
              className='w-full border-b focus:border-blue-500 outline-none px-2 py-1'
              value={email} 
              onChange={(e) => {setEmail(e.target.value) ; handleValidEmail(e.target.value)}}
            />
            {validEmail === false && email.trim() !== "" && <p className='text-red-500 text-sm'>Email should ends with @gmail.com or @company.com</p>}
          </label>

          <label htmlFor="password" className='flex flex-col gap-2'>
            <p>Password</p>
            <input 
              type="password" 
              required 
              placeholder='min. 6 Character' 
              className='w-full border-b focus:border-blue-500 outline-none px-2 py-1' 
              value={password} 
              onChange={(e) => {setPassword(e.target.value); handleValidPassword(e.target.value)}}
            />

            {validPassword === false && password.trim() !== "" && <p className='text-red-500 text-sm'>Password should have 6 Character</p>}
          </label>
          </div>
        
          <button className='w-[80%] font-semibold text-white bg-blue-500 py-2 rounded-[6px]'>Login</button>
        </form>
    </div>
  )
}

export default App
