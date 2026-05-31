import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const useTheme = () =>{
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('useTheme should be given within the provider');
    }
    return context;
}

export default useTheme;