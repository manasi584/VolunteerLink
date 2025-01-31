import { CssBaseline, ThemeProvider, Box, Container, Drawer, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { useState } from "react";
import theme from "../Theme";
import NGODashboard from "../components/NGODashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NGOWrapper() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggleSidebar function called! Sidebar state before:", isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Pass onProfileClick to Navbar */}
      <Navbar onProfileClick={toggleSidebar} />
      
      <Container maxWidth="lg" sx={{ display: "flex", paddingY: 4 }}>
        {/* Main Dashboard Content */}
        <Box sx={{ 
          flexGrow: 1, 
          padding: 3, 
          backgroundColor: 'background.paper', 
          borderRadius: '8px', 
          boxShadow: 3, 
          marginRight: 4 }}>
          <NGODashboard />
        </Box>

        {/* Sidebar Drawer */}
        <Drawer 
          anchor="right" 
          open={isSidebarOpen} 
          onClose={toggleSidebar} 
          PaperProps={{ sx: { width: 300, padding: 2 } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            NGO Profile
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Name: Helping Hands Foundation" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Mission: Empowering underprivileged children through education and healthcare." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Team Size: 25 Members" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Volunteer Needs:" />
            </ListItem>
            <List sx={{ paddingLeft: 2 }}>
              <ListItem><ListItemText primary="- Teaching & Mentorship" /></ListItem>
              <ListItem><ListItemText primary="- Event Planning & Coordination" /></ListItem>
              <ListItem><ListItemText primary="- Fundraising & Grant Writing" /></ListItem>
            </List>
            <ListItem>
              <ListItemText primary="Verified NGO: ✅ Yes" />
            </ListItem>
          </List>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ marginTop: 2 }}>
            Update Profile
          </Button>
        </Drawer>
      </Container>
      
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default NGOWrapper;
