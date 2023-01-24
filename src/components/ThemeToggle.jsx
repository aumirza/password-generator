import { Brightness7, DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useThemeMode } from "../Contexts/ThemeMode";

export const ThemeToggle = () => {
  const { themeMode, toggleThemeMode } = useThemeMode();
  return (
    <IconButton onClick={toggleThemeMode}>
      {themeMode === "light" ? (
        <DarkMode sx={{ color: "primary.contrastText" }} />
      ) : (
        <Brightness7 sx={{ color: "primary.contrastText" }} />
      )}
    </IconButton>
  );
};
