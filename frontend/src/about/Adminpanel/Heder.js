// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Heder = () => {
  return (
    <AppBar position="absolute" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Heder;
