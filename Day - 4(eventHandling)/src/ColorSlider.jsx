import React,{ useState } from 'react'

const ColorSlider = () => {

    const[red, setRed] = useState(0);
    const[blue, setBlue] = useState(0);
    const[green, setGreen] = useState(0);
    const[transpant, setTranspant] = useState(1);

    const handleRed = (event) => {
        setRed(event.target.value);
    }

    const handleGreen = (event) => {
        setGreen(event.target.value);
    }
    const handleBlue = (event) => {
        setBlue(event.target.value);
    }
    const handleTransparent = (event) => {
        setTranspant(event.target.value);
    }

    
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <div className='w-[20rem] h-[20rem] border-[10px] border-gray-300 rounded-[10px]' 
      style={{backgroundColor:`rgba(${red}, ${green}, ${blue},${transpant})`}}
      />

      <div className='mt-10'>
        <div className='flex gap-2 items-center'>
            <input type="range" value={red} onChange={handleRed} max={255}/>
            <p>Red : {red}</p>
        </div>

        <div className='flex gap-2 items-center'>
            <input type="range" value={green} onChange={handleGreen} max={255}/>
            <p>Green : {green}</p>
        </div>

        <div className='flex gap-2 items-center'>
            <input type="range" value={blue} onChange={handleBlue} max={255}/>
            <p>Blue : {blue}</p>
        </div>

        <div className='flex gap-2 items-center'>
            <input type="range" value={transpant} onChange={handleTransparent} max={1} min={0} step={0.1}/>
            <p>Transparent : {transpant}</p>
        </div>
      </div>
    </div>
  )
}

export default ColorSlider
