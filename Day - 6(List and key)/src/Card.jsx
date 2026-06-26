import React from 'react'
import { ShoppingCart, Star } from 'lucide-react'

const Card = ({
  id = 0,
  name = "product name",
  price = 0.00,
  star = 0,
  offer, 
  productImage = "/Images/noimage.webp",
  description = "Sample description for the given product" }
) => {
  return (
    <div className='w-full h-full bg-white min-h-[25rem] rounded-[12px]'>
      <div className='w-[95%] mx-auto mt-2 rounded-[8px] bg-gray-400 h-[60%]'>
        <img src={productImage} alt={name} className='w-full h-full object-contain' />
      </div>
    </div>
  )
}

export default Card
