import { createContext, useState } from "react";

const initialValue: ThemeProps = {theme: 'dark', toogleTheme: () => {}}

interface ThemeProps {
    theme: string
    toogleTheme: () => void
}

export const ThemeContext = createContext<ThemeProps>(initialValue)

export default function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<string>('dark')

    const toogleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light': 'dark')
    }

    return (
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}