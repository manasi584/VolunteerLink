import React, { useState } from "react";
import Navbar from "./Navbar";
import CurrTasks from "./CurrTasks";
import Recommendation from "./Recommendation";
import ImpactDash from "./ImpactDash";
import AllJobs from "./AllJobs";
import Feature from "./Feature";
import { Drawer, Typography, List, ListItem, ListItemText, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import "./dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    skills: "Graphic Designing, Canva",
  });
  const [newName, setNewName] = useState("");
  const [newSkills, setNewSkills] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleUpdateProfile = () => {
    setIsDialogOpen(true);
  };

  const handleSaveProfile = () => {
    setProfile({
      name: newName || profile.name,
      skills: newSkills || profile.skills,
    });
    setIsDialogOpen(false);
    setNewName("");
    setNewSkills("");
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
      <Drawer anchor="right" open={isSidebarOpen} onClose={toggleSidebar} PaperProps={{ sx: { width: 300, padding: 2 } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Volunteer Profile
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary={`Name: ${profile.name}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Current Location: New York, USA" />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Skills: ${profile.skills}`} />
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

        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleUpdateProfile}>
          Update Profile
        </Button>
      </Drawer>

      {/* Update Profile Dialog */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Update Name"
            variant="outlined"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Update Skills"
            variant="outlined"
            value={newSkills}
            onChange={(e) => setNewSkills(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="secondary">Cancel</Button>
          <Button onClick={handleSaveProfile} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dashboard;
