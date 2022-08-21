import React, { createContext, useState } from 'react'


export type AppContextInterface = {
  darkMode: boolean;
  setDarkModeHandler: () => void;
}

export const ThemeContext = createContext<AppContextInterface | null>(null);

interface IProps {
  children?: React.ReactNode;
}


const ThemeContextProvider: React.FC<IProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  const setDarkModeHandler = () => {
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkModeHandler
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;