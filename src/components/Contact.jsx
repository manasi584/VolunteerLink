import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, Paper, CircularProgress } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // To show the loading spinner during form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a network request with a timeout
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      // Redirect to the landing page after submission
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }, 2000);
  };

  return (
    <Box sx={{ 
      height: '100vh', 
      background: 'linear-gradient(145deg,#0056b3,#007bff)', 
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container maxWidth="sm" sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        {/* Paper component for aesthetic effect */}
        <Paper elevation={6} sx={{ padding: '2rem', background: 'white', color: '#333' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Get in Touch with Us
          </Typography>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12}>
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      input: { backgroundColor: '#f5f5f5', color: '#000' }, 
                    }}
                  />
                </Grid>

                {/* Email Field */}
                <Grid item xs={12}>
                  <TextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      input: { backgroundColor: '#f5f5f5', color: '#000' }, 
                    }}
                  />
                </Grid>

                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    label="Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      input: { backgroundColor: '#f5f5f5', color: '#000' }, 
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#4caf50', // Soft green accent
                      color: '#fff',
                      '&:hover': { backgroundColor: '#388e3c' },
                      padding: '1rem',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    }}
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          ) : (
            <Box textAlign="center">
              <Typography variant="h6" sx={{ color: '#333' }}>
                Thank you for reaching out!
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                We’ve received your message, and you’ll be redirected shortly.
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
