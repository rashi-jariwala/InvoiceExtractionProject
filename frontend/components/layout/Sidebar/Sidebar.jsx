import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import { Link, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { label: "Upload Invoice", path: "/upload", icon: <UploadFileIcon /> },
  { label: "Invoice List", path: "/invoices", icon: <ReceiptLongIcon /> },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "linear-gradient(180deg, #183b5b 0%, #0f2d46 100%)",
          color: "#f5f7fb",
          borderRight: "none",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ px: 2, py: 2, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#ffffff" }}>
          Invoice Hub
        </Typography>
        <Typography variant="body2" sx={{ color: "#cfe0f3", mt: 0.5 }}>
          Manage your invoices
        </Typography>
      </Box>

      <List sx={{ mt: 1 }}>
        {menuItems.map(({ label, path, icon }) => {
          const isActive =
            location.pathname === path ||
            (path === "/invoices" && location.pathname.startsWith("/invoice"));

          return (
            <ListItemButton
              key={path}
              component={Link}
              to={path}
              selected={isActive}
              sx={{
                mx: 1,
                mb: 1,
                borderRadius: 2,
                color: isActive ? "#ffffff" : "#dbeafe",
                backgroundColor: isActive ? "#4f7fb7" : "transparent",
                boxShadow: isActive ? "0 6px 16px rgba(79, 123, 183, 0.3)" : "none",
                "&.Mui-selected": {
                  backgroundColor: "#4f7fb7",
                  color: "#ffffff",
                },
                "&:hover": {
                  backgroundColor: isActive ? "#4f7fb7" : "rgba(255,255,255,0.14)",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: "inherit" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontWeight: isActive ? 700 : 500,
                  color: "inherit",
                }}
              />
            </ListItemButton>
          );
        })}

        <ListItemButton
          onClick={handleLogout}
          sx={{
            mx: 1,
            mt: 2,
            borderRadius: 2,
            color: "#f8d7da",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.14)",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: "inherit" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;