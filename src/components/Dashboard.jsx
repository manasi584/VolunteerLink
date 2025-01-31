import React, { useState } from "react";
import Navbar from "./Navbar";
import CurrTasks from "./CurrTasks";
import Recommendation from "./Recommendation";
import ImpactDash from "./ImpactDash";
import AllJobs from "./AllJobs";
import Feature from "./Feature";
import { Drawer, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import "./dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggleSidebar function called! Sidebar state before:", isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar onProfileClick={toggleSidebar} />
      <ImpactDash />
      <div className="all-cards">
        <Recommendation />
        <Feature />
        <AllJobs />
      </div>
      <CurrTasks />

      {/* Profile Sidebar */}
      <Drawer 
        anchor="right" 
        open={isSidebarOpen} 
        onClose={toggleSidebar} 
        PaperProps={{ sx: { width: 300, padding: 2 } }}>
        
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Volunteer Profile
        </Typography>
        
        <List>
          <ListItem>
            <ListItemText primary="Name: John Doe" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Current Location: New York, USA" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Skills: Graphic Designing, Canva" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Preferred Volunteering: Offline" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Hours Contributed: 0 Hours" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Verified Volunteer: ✅ Yes" />
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
    </>
  );
};

export default Dashboard;
