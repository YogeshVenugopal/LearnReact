import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '/Images/default.png'

import { Heart, ThumbsUp, Plus } from 'lucide-react';

const Card = ({
    profile = defaultImage,
    name = "Sample",
    desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur deserunt dolor voluptas iure quasi totam deleniti in quisquam eos."
}) => {
  return (
    <div className='w-[25rem] h-[30rem] rounded-[18px] shadow-lg inset-shadow-sm flex items-center justify-center text-white'>
        <div className='w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-[14px] bg-green-700 relative overflow-hidden'>
            <img src={profile} alt="Profile Images" className='w-full h-full object-cover z-0'/>
            <div className='absolute w-full h-1/3 bottom-0 right-0 bg-green-800/50 blur-xl z-10' />
            <div className='absolute w-full h-1/3 bottom-0 right-0 z-50'>
                <div className='w-[90%] h-[90%] mx-auto z-50'>
                    <h1 className='text-white text-2xl font-bold'>{name}</h1>
                    <p className=' text-white/70 text-sm'>{desc}</p>
                    <div className='w-full flex justify-around mt-2'>
                        <div className='flex gap-1 items-center cursor-pointer'>
                            <Heart size={20}/> <p>2.3k</p>
                        </div>
                        <div className='flex gap-1 items-center cursor-pointer'>
                            <ThumbsUp  size={20}/> <p>1k</p>
                        </div>
                        <button className='px-5 py-2 rounded-3xl flex cursor-pointer items-center gap-1 bg-white text-black'>
                            <Plus /> Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


Card.propTypes = {
    profile: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string
}

export default Card;

