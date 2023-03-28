/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Article } from "@mui/icons-material";

const drawerWidth = 240;

export const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const navigate = useNavigate();

  const menuItems = ["All Papers", "Add Paper", "View Results"];
  const menuNavigate = ["allpapers", "addpaper", "results"];

  const drawer = (
    <div>
      <Toolbar />
      <Typography align="center" py={2} textTransform="uppercase">
        Teacher
      </Typography>
      <Divider />

      <List>
        {menuItems.map((text, i) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => navigate(menuNavigate[i])}
          >
            <ListItemButton>
              <ListItemIcon>
                <Article style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </div>
  );

  return (
    <Box
      component="nav"
      // xxxxxxxxxx SIDE BAR xxxxxxxxxx
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      {/* xxxxxxxxxx SIDE BAR MOBILE xxxxxxxxxx */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onClick={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            borderRadius: 0,
            boxSizing: "border-box",
            width: drawerWidth,
            background: "rgba(1, 4, 13,1 )",
            opacity: 1,
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* xxxxxxxxxx SIDE BAR DESKTOP xxxxxxxxxx */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            borderRadius: 0,
            boxSizing: "border-box",
            width: drawerWidth,
            background: "rgba(1, 4, 13, 0.6 )",
            opacity: 1, 
            color: "white",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
