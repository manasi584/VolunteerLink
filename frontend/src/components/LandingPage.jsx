import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as ScrollLink, Element } from "react-scroll";

const LandingPage = () => {
  return (
    <Box sx={{ overflowX: "hidden", fontFamily: "'Roboto', sans-serif" }}>
       {/* Navbar */}
       <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#1E2A38",
          boxShadow: "none",
          borderBottom: "2px solid #00A8E8",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#00A8E8",
              cursor: "pointer",
            }}
          >
            VolunteerLink
          </Typography>
          {["About", "Features", "FAQs"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ color: "white", mx: 1 }}>{item}</Button>
            </ScrollLink>
          ))}
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              sx={{
                color: "white",
                "&:hover": { color: "#00A8E8" },
              }}
            >
              Contact
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                color: "#00A8E8",
                borderColor: "#00A8E8",
                mx: 1,
                "&:hover": { backgroundColor: "#00A8E8", color: "white" },
              }}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              sx={{
                color: "white",
                "&:hover": { color: "#00A8E8" },
              }}
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "linear-gradient(to right, #0056b3, #007bff)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          pt: 8, // Navbar spacing
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Empower Communities Through Volunteerism
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "700px", mx: "auto" }}>
          VolunteerLink connects passionate volunteers with verified NGOs,
          enabling meaningful contributions through skill-based, virtual, and
          gamified opportunities.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              mx: 2,
              backgroundColor: "white",
              color: "#007bff",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#0056b3", color: "white" },
            }}
          >
            Become a Volunteer
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              mx: 2,
              borderColor: "white",
              color: "white",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "white", color: "#0056b3" },
            }}
          >
            Find Volunteers
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Element name="about">
        <Box
          sx={{
            py: 8,
            px: 4,
            background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#1E2A38" }}
            >
              About VolunteerLink
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.8,
                color: "#4A4A4A",
              }}
            >
              VolunteerLink bridges the gap between volunteers and NGOs by
              providing a centralized platform that matches individuals based on
              their skills, availability, and location. With features like
              virtual opportunities, gamification, and impact tracking,
              VolunteerLink ensures meaningful contributions to social causes.
            </Typography>
          </Container>
        </Box>
      </Element>

      {/* Features Section */}
      <Element name="features">
        <Box
          sx={{
            py: 8,
            px: 4,
            backgroundColor: "#ffffff",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#1E2A38" }}
            >
              Key Features
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                "Skill-based matching for volunteers",
                "Remote & on-ground opportunities",
                "Verified NGOs for authenticity",
                "Gamified progress tracking with badges",
                "Group and solo volunteering options",
                "Transparent feedback system",
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ boxShadow: 3, height: "100%" }}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "#007bff" }}
                      >
                        {feature}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Element>

      {/* FAQs Section */}
      <Element name="faqs">
        <Box
          sx={{
            py: 8,
            px: 4,
            backgroundColor: "#e9ecef",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#1E2A38" }}
            >
              Frequently Asked Questions
            </Typography>
            <Box sx={{ maxWidth: "800px", mx: "auto", mt: 4 }}>
              {[
                {
                  question: "What is VolunteerLink?",
                  answer:
                    "VolunteerLink is a platform that connects volunteers and NGOs for meaningful contributions to social causes.",
                },
                {
                  question: "How do I sign up?",
                  answer:
                    "You can sign up by creating an account and selecting your skills and availability.",
                },
                {
                  question: "Are NGOs verified?",
                  answer:
                    "Yes, NGOs on VolunteerLink are verified to ensure authenticity.",
                },
              ].map((faq, index) => (
                <Accordion key={index}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>
      </Element>

      {/* Footer */}
      <Element name="contact">
        <Box
          sx={{
            py: 4,
            backgroundColor: "#1E2A38",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} VolunteerLink. All rights
            reserved.
          </Typography>
        </Box>
      </Element>
    </Box>
  );
};

export default LandingPage;
