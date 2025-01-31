import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
      <Typography variant="body2" sx={{ fontSize: '14px' }}>
        © 2025 VolunteerLink. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
