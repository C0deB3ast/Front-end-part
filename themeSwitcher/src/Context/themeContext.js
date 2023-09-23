import React, {createContext,useContext} from 'react'

export const ThemeContext=createContext({
    theme:"light",
    darkMode:()=>{},
    lightMode:()=>{} 
})

export const ThemeContextProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
