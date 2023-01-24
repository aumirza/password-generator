import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        color: "text.primary",
        gap: 1,
      }}
    >
      <Typography variant="body2" align="center">
        Made with ❤️ by
      </Typography>
      <a
        style={{ textDecoration: "none" }}
        href="https://ahmadullah.in"
        target="_blank"
        rel="noreferrer"
      >
        <Typography
          sx={{ color: "primary.main" }}
          variant="body2"
          align="center"
        >
          <span> aumirza </span>
        </Typography>
      </a>
    </Box>
  );
};
