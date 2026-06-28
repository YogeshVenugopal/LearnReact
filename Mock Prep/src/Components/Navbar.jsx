import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full h-[80px] md:h-[90px] flex items-center justify-center shadow-md bg-white relative'>
            <div className='w-[90%] md:w-[80%] flex items-center justify-between '>
                <h1 className='font-bold text-2xl cursor-pointer' onClick={() => navigate('/')}>Logo</h1>

                <div className='w-1/4 hidden md:flex items-center justify-evenly gap-5 decoration-none'>
                    <NavLink to={'/product'}>
                        <div>Products</div>
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <div>Cart</div>
                    </NavLink>
                    <NavLink to={'/order'}>
                        <div>Orders</div>
                    </NavLink>
                </div>

                <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 
                    <X />
                    :
                    <Menu />
                    }
                </div>

            </div>
            {
                isOpen && (
                    <div className='absolute top-0 translate-y-full w-full flex flex-col gap-5 bg-white'>
                        <NavLink to={'/product'}>
                            <div>Products</div>
                        </NavLink>
                        <NavLink to={'/cart'}>
                            <div>Cart</div>
                        </NavLink>
                        <NavLink to={'/order'}>
                            <div>Orders</div>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar
