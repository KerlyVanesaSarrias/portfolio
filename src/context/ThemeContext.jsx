import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeContextProvider = () => {
    const [contextTheme, setContextTheme] = useState('dark')
    const values = {contextTheme,setContextTheme}
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
   const context = useContext(ThemeContext)
   return context
}