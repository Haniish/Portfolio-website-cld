import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Sending email with: ");
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log("EmailJS Success:", response);
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      form.current.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);

      let errorMessage = "Failed to send message. Please try again.";

      if (error?.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error?.status) {
        errorMessage = `Error ${error.status}: ${error.statusText}`;
      }

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <Box sx={{ py: 8 }}>
      <Card sx={{ maxWidth: 600, mx: 'auto', bgcolor: 'rgba(19, 47, 76, 0.8)' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Let's Connect
          </Typography>
          <form ref={form} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="user_name"
              margin="normal"
              required
              sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)' }}
            />
            <TextField
              fullWidth
              label="Email"
              name="user_email"
              margin="normal"
              required
              type="email"
              sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)' }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              margin="normal"
              required
              multiline
              rows={4}
              sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)' }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
