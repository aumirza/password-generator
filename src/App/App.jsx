import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { ThemeModeContext } from "../Contexts/ThemeMode";
import { darkTheme, lightTheme } from "../styles/theme";
import "./App.css";

export function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleThemeMode = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
    sessionStorage.setItem("themeMode", newThemeMode);
  };

  useEffect(() => {
    const themeMode = sessionStorage.getItem("themeMode");
    if (themeMode) {
      setThemeMode(themeMode);
      return;
    }
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkMode) {
      setThemeMode("dark");
    }
  }, []);

  const Theme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      <ThemeProvider theme={Theme}>
        <Layout />
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
