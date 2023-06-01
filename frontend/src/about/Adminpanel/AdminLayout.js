// src/components/AdminLayout.js
import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./Sidebar";
// import Header from "./Header";
import Content from "./Content";
import Heder from "./Heder";


const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Heder />
        <Content />
      </Box>
    </Box>
  );
};

export default AdminLayout;
