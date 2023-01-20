// import '@/styles/globals.css'

import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';


export default function App({ Component, pageProps }) {
  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {}, // override dark theme colors
    },
  });
  
  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {}, // optional
    },
  });
  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
  <NextUIProvider
   ><Component {...pageProps} />  
  </NextUIProvider>
  </NextThemesProvider>
 

  )}
