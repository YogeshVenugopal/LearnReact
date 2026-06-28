import { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { useProductContext } from '../Context/ProductContext'

const Product = () => {
  const {productData, loading} = useProductContext();
  // console.log(productData);
  return (
    <div className='font-primary'>
      <Navbar />
      <div className='w-[90%] md:w-[80%] mx-auto'>
        <div className='flex justify-end'>

        </div>
      </div>
    </div>
  )
}

export default Product
