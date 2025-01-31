import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">VolunteerLink</div>
      <div className="menu">
        <a href="/">Home</a>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault(); // Prevents page reload
            console.log("Profile clicked. Calling onProfileClick...");
            if (onProfileClick) {
              onProfileClick(); // Call sidebar toggle
            } else {
              console.error("onProfileClick function is undefined!");
            }
          }}
        >
          Profile
        </a>
        <a href="/login">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
