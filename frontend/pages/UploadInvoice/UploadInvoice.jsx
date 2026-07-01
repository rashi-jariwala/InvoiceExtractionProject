import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import { uploadInvoice } from "../../redux/invoice/invoice.actions";
import { getUsername, setUsername as saveUsername } from "../../utils/storage";

const UploadInvoice = () => {
  const dispatch = useDispatch();

  const { loading, error, invoice } = useSelector((state) => state.invoice);

  const [username, setUsername] = useState(() => getUsername() || "");
  const [file, setFile] = useState(null);

  const feedbackMessage = error
    ? error
    : invoice && invoice._id
      ? "Invoice uploaded successfully!"
      : null;

  const handleUpload = () => {
    if (!username.trim()) {
      alert("Please login with a valid username");
      return;
    }

    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    const formData = new FormData();

    formData.append("username", username);
    formData.append("invoice", file);

    saveUsername(username);
    setFile(null);

    dispatch(uploadInvoice(formData));
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5 }}>
        <CardContent>
          <Typography variant="h5" mb={3}>
            Upload Invoice
          </Typography>

          {feedbackMessage && (
            <Alert severity={error ? "error" : "success"} sx={{ mb: 2 }}>
              {feedbackMessage}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled
          />

          <Button
            fullWidth
            variant="outlined"
            component="label"
            sx={{ mt: 3 }}
          >
            Choose PDF

            <input
              hidden
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Button>

          {file && <Typography mt={2}>{file.name}</Typography>}

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            disabled={loading}
            onClick={handleUpload}
          >
            {loading ? <CircularProgress size={22} color="inherit" /> : "Upload Invoice"}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UploadInvoice;