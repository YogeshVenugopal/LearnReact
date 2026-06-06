import { useContext, createContext, useState, useEffect } from "react";
import axiosApi from "../Api/axios";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const[data, setData] = useState();
    const[loading, setLoading] = useState(true);

    const fetchProductData = async() => {
        try {
            const response = await axiosApi.get('/api/products')
            setData(response.data.data);

            console.log(response.data);
        } catch (error) {
            console.log("Something went wrong in the product context", error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProductData();
    },[])

    return(
        <ProductContext.Provider value={{data, loading}}>
            {children}
        </ProductContext.Provider>
    )
}