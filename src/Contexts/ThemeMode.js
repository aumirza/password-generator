import { createContext, useContext, useState } from "react";

export const ThemeModeContext = createContext({
    themeMode: 'light',
    toggleThemeMode: () => { }
});

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    const toggleTheme = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeModeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeModeContext.Provider>
    );
}

