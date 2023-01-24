import { Box } from "@mui/material";
import React from "react";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Header />
      <Container />
      <Footer />
    </Box>
  );
};
