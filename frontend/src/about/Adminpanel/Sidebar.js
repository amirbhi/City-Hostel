// src/components/Sidebar.js
import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <List>
        {/* Add your menu items here */}
        <ListItem button>
          
            <Link to={'/createroom'}>Add Room</Link>
          
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
      
          <Link to={'/showroom'}>Show Rooms</Link>

      
          
        </ListItem>
        <ListItem button>
      
          <Link to={'/createroom'}>Add Rooms</Link>

      
          
        </ListItem>
        <ListItem button>
      
          <Link to={'/showroom'}>Show Rooms</Link>

      
          
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
