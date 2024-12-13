"use client"
import {createContext, ReactNode} from "react";

type Theme = {
    colors: {
      primary: string,
      secondary: string,
    }
  }
  
  const defaultTheme: Theme = {
    colors: {
      primary: "#3386ff",
      secondary: "#33ff39"
    }
  }
  
   const themeContext = createContext<Theme>(defaultTheme);

   export {
    themeContext
   }

   export default function ThemeProvider({children}: {children: ReactNode}) {
    return <themeContext.Provider value={defaultTheme}>
        {children}
    </themeContext.Provider>
   }