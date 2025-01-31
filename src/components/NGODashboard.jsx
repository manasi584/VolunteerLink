import React, { useState } from 'react';
import { Grid, Box, Card, CardContent, Typography, LinearProgress, Button, List, ListItem, ListItemText } from '@mui/material';
import { People, Task, Event, AttachMoney, MonetizationOn, AccessTime, CheckCircle, EventNote, RateReview, Share, PersonAdd, BarChart, PendingActions, AdUnits } from '@mui/icons-material';

function NGODashboard() {
  // State to manage visibility of lists (Jobs & Feedback)
  const [showJobs, setShowJobs] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const jobList = [
    "Volunteer at Book Donation Drive",
    "Help with Fundraising Campaign for Education",
    "Assist in Community Outreach Program",
  ];

  const feedbackList = [
    "Great support and easy communication.",
    "Looking forward to more opportunities!",
    "Loved the event, would volunteer again."
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", padding: 3 }}>
      {/* Dashboard Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        NGO Dashboard
      </Typography>
      
      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {/* Volunteers Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <CardContent>
              <People fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>Volunteers</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>150</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Ongoing Tasks Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <CardContent>
              <Task fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>Ongoing Tasks</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>12</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <CardContent>
              <Event fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>Upcoming Events</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>5</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Funds Raised Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <CardContent>
              <AttachMoney fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>Funds Raised</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>$25,000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Cards Grid */}
      <Grid container spacing={3} sx={{ flexGrow: 1, mt: 4 }}>
        {/* Donors Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <CardContent>
              <MonetizationOn fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>Donors</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>200</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Volunteer Hours Logged Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <CardContent>
              <AccessTime fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>Volunteer Hours</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>1,200 hrs</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Task Completion Rate Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <CardContent>
              <CheckCircle fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>Task Completion Rate</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>80%</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Meetings Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
            <CardContent>
              <EventNote fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>Upcoming Meetings</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Current Tasks Progress */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Task Progress</Typography>
        <LinearProgress variant="determinate" value={60} sx={{ height: 10, borderRadius: 5 }} />
      </Box>

      {/* Available Jobs Section */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Available Volunteering Jobs</Typography>
        <Button variant="contained" color="primary" onClick={() => setShowJobs(!showJobs)}>
          {showJobs ? "Hide Jobs" : "View All Jobs"}
        </Button>
        {showJobs && (
          <List sx={{ mt: 2 }}>
            {jobList.map((job, index) => (
              <ListItem key={index}>
                <ListItemText primary={job} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* Feedback Section */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Feedback</Typography>
        <Button variant="contained" color="primary" onClick={() => setShowFeedback(!showFeedback)}>
          {showFeedback ? "Hide Feedback" : "View All Feedback"}
        </Button>
        {showFeedback && (
          <List sx={{ mt: 2 }}>
            {feedbackList.map((feedback, index) => (
              <ListItem key={index}>
                <ListItemText primary={feedback} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
}

export default NGODashboard;
