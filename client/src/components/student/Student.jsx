import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Drawer } from "../drawer/Drawer";

export const Student = () => (
  <Drawer sidebarVisible={false}>
    <Box
      width="100%"
      align="center"
      sx={{
        height: `calc(100vh - 106px)`,
        overflow: "scroll",
        bgcolor: "white",
      }}
    >
      <Outlet />
    </Box>
  </Drawer>
);
