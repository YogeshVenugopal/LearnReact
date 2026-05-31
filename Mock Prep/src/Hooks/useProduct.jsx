import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext';

const useProduct = () => {
    const context = useContext(ProductContext);

    if(!context){
        throw new Error('useProduct should be with in the provider');
    }
    return context;
}

export default useProduct
