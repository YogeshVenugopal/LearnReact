import React, { useState } from 'react'
import { Plus, ShoppingCart, Star } from 'lucide-react'

const Card = ({
  id = 0,
  name = "product name",
  price = 0.00,
  star = 0,
  isOffer,
  offer,
  productImage = "/Images/noimage.webp",
  description = "Sample description for the given product" }
) => {

  const [expanded, setExpanded] = useState(false);

  const limit = 90;
  const isLong = description.length > limit;
  return (
    <div className='w-full h-full bg-white rounded-[12px] flex flex-col justify-evenly items-center gap-2'>
      <div className='w-[95%]  rounded-[8px] bg-gray-400 h-[60%] relative'>
        {isOffer && <div className='text-white absolute top-0 right-0 bg-orange-400 p-1 px-2 rounded-[6px]'>-{offer}%</div>}
        <img src={productImage} alt={name} className='w-full h-full object-contain' />
      </div>
      <div className='w-[95%] h-[35%] flex flex-col justify-evenly'>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-semibold text-orange-400'>$ {isOffer ? price - (price * (offer / 100)).toFixed(2) : price}</h2>
          <div className='flex items-center gap-0.5'>
            <Star color='orange' /> {star}
          </div>
        </div>
        <p className="text-sm text-gray-600">
          {expanded || !isLong
            ? description
            : `${description.slice(0, limit)}...`}

          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-orange-500 font-semibold"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
        <div className='flex items-center justify-between'>
          <button className='w-[45%] flex items-center bg-orange-400 text-white rounded-[6px] justify-center py-2 cursor-pointer gap-1'>Add to Cart <ShoppingCart /></button>
          <button className='w-[45%] flex items-center border border-orange-400 rounded-[6px] text-orange-400 justify-center py-2 cursor-pointer'>Buy Now <Plus /></button>
        </div>
      </div>
    </div>
  )
}

export default Card
