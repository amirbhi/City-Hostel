// src/components/Content.js
import React from "react";
import { Container, Typography } from "@mui/material";

const Content = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Typography variant="h4">Welcome to the Admin Panel</Typography>
      {/* Add your content here */}
    </Container>
  );
};

export default Content
