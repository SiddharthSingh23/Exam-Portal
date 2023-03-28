/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Navabr } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Drawer = ({ children, sidebarVisible, drawerWidth }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "scroll" }}>
      <Navabr
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      {sidebarVisible && (
        <Sidebar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: "64px",
          [theme.breakpoints.down("sm")]: { mt: "56px" },
          height: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
