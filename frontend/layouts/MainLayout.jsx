import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar/Sidebar";

const drawerWidth = 240;

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f4f7fb" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          p: 3,
          bgcolor: "#f4f7fb",
          margin:"auto",
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: 3,
            p: 3,
            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
            minHeight: "calc(100vh - 120px)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;