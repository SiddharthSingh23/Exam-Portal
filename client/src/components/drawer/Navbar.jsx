/* eslint-disable react/prop-types */
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

// const drawerWidth = 240;

export const Navabr = ({ handleDrawerToggle, drawerWidth }) => {
console.log();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {sm: `calc(100% - ${drawerWidth}px)`, xs: "100%"},
        // ml: { sm: `${drawerWidth}px` },
        borderRadius: 0,
        background: "rgba(1, 4, 13, 0.6 )",
        opacity: 1,
        color: "aliceblue",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          fontFamily={'"Poppins", sans-serif'}
        >
          EXAMINATION PORTAL
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
