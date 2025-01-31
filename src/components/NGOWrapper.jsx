import { CssBaseline, ThemeProvider, Box, Container } from "@mui/material";
import theme from "../Theme";
import NGODashboard from "../components/NGODashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NGOWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Navbar */}
      <Navbar />
      
      <Container maxWidth="lg" sx={{ paddingY: 4 }}>
        {/* Main Content Box */}
        <Box sx={{ 
          padding: 3, 
          backgroundColor: 'background.paper', 
          borderRadius: '8px', 
          boxShadow: 3, 
          marginBottom: 4 }}>
          <NGODashboard />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default NGOWrapper;
