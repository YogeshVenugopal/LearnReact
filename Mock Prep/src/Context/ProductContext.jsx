import { useState, useEffect, createContext, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState(
        {
            totalProducts: 0,
            categoriesCount: 0,
            categoriesList: [],
            totalStockCount: 0,
            totalInventoryValue: 0,
            averageProductPrice: 0
        }
    );
    const [loading, setLoading] = useState(true);
    const localhost = "http://localhost:3000";

    useEffect(() => {
        fetchStats();
    }, [])
    const fetchStats = async () => {
        try {

            const response = await fetch(`${localhost}/api/products/stats`);
            const data = await response.json();
            // console.log("Product stats fetched successfully:", data.stats);
            setProductData(data.stats);

        } catch (error) {
            console.log("Something went wrong in the product stats fetching :", error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <ProductContext.Provider value={{ productData, loading }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);