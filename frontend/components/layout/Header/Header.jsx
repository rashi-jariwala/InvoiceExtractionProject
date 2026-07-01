import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        background: "#fff",
        color: "#000",
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight={600}>
          {/* Invoice Extraction System */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;