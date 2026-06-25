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
    <div className='bg-white w-full h-full rounded-[12px] shadow-xl border-[8px]  border-gray-300 relative'>
      {offer && <div className='bg-gray-300 absolute px-2 py-1'>{offer}</div>}
      <div className='h-[70%] flex items-center justify-center'>
        <img src={productImage} alt="Product Image" className='w-[90%] h-[90%] mx-auto object-contain' />
      </div>
      <div className='h-[30%] p-5'>
        <div className='w-full flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>{name}</h1>
          <h1 className='text-2xl'>$ {price}</h1>
        </div>
        <p className='mt-2'>{description}</p>
        <div className='w-full flex items-center justify-between mt-5'>
          <div className='flex items-center gap-0.5'> {[...Array(star)].map((_, i) => (
            <Star key={i} size={20} color='orange'/>
          ))}</div>
          <button className='flex items-center gap-2 px-2 py-3 bg-blue-500 text-white rounded-[8px]'><ShoppingCart /> Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card
