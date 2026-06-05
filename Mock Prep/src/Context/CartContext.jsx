import { useState, useEffect, useContext, createContext } from 'react';
import axiosApi from '../Api/axios';

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const[loading, setLoading] = useState(true);
    const[data, setData] = useState();

    const fetchCartData = async() => {
        try {
            
            const response = await axiosApi.get('/api/cart')
            setData(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.log("Something went wrong in the cart context", error);
        }   
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCartData();
    },[])

    return(
        <CartContext.Provider value={{data, loading}}>
            {children}
        </CartContext.Provider>
    )
}