import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "50px",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth="lg"
      >
        <Typography
          // responsive font size
          sx={{ fontSize: { xs: "1.4rem", sm: "1.6rem" } }}
          variant="h5"
        >
          Password Generator
        </Typography>
        <ThemeToggle />
      </Container>
    </Box>
  );
};
