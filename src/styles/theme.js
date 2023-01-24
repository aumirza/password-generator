import { blueGrey, grey } from "@mui/material/colors";

const { createTheme } = require("@mui/material");

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#fff",
            paper: blueGrey[50],
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: grey[800],
            paper: "#1f1f1f"
        }
    }
})