import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import api from "../../src/api/axios";
import API from "../../src/api/endpoints";
import { setUsername } from "../../utils/storage";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsernameInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.get(`${API.GET_INVOICES}/${username.trim()}`);

      if (response?.data?.success && response?.data?.count > 0) {
        setUsername(username.trim());
        navigate("/upload", { replace: true });
      } else {
        setError("Username not found. Please use a valid username.");
      }
    } catch {
      setError("Username not found. Please use a valid username.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: "100%", boxShadow: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight={700} mb={1}>
              Login to Invoice Portal
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Enter your username to access invoice upload and invoice list pages.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsernameInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Checking..." : "Login"}
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
