import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios for API requests

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);  // State to show error message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("****")

   if (formData.email === "test2@example.com" && formData.password === "password1234") {
      setIsLoggedIn(true); // Update the login state
      alert("NGO login successful!");
      navigate("/ngo/dashboard"); // Redirect to NGO dashboard
    } else {
      // If not NGO, proceed with volunteer login using backend API
      try {
        // Send the login credentials to the backend API using Axios for volunteer login
        const response = await axios.post("http://localhost:8000/api/auth/login/volunteer", formData);
        console.log("Response Status:", response.status); // Debug the response status

        if (response.status === 200) {
          console.log("Login successful");
          setIsLoggedIn(true); // Update the login state
          alert("Login successful!");

          // Store JWT token or user details in localStorage for session management
          localStorage.setItem("userToken", response.data.token); // Assuming the response includes a JWT token
          navigate("/dashboard"); // Redirect to volunteer dashboard after successful login
        }
      } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error.message);
        setErrorMessage("Invalid email or password. Please try again."); // Show error message if login fails
      }
    }
  };
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: 'linear-gradient(145deg,#0056b3,#007bff)', 
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "2rem 3rem",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            marginBottom: "1.5rem",
            textAlign: "center",
            fontWeight: "bold",
            color: "#4A4A4A",
          }}
        >
          Login as Volunteer
        </h2>

        {/* Show error message if login fails */}
        {errorMessage && (
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "0.5rem",
              borderRadius: "5px",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {errorMessage}
          </div>
        )}

        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            background: '#4caf50',
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.background = '#4caf50')}
          onMouseLeave={(e) => (e.target.style.background = '#4caf58')}
        >
          Login
        </button>
        <p
          style={{
            marginTop: "1rem",
            textAlign: "center",
            color: "#666",
            fontSize: "0.9rem",
          }}
        >
          Don't have an account?{" "}
          <span
            style={{
              color: '#4caf50',
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
