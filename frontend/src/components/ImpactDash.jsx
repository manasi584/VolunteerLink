import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const ImpactDash = () => {
  
  const volunteerId = "679c891df9bf773da95df622";
  
  console.log(document.cookies);
  const [data, setData] = useState({
    tasksCompleted: 0,
    hoursContributed: 0,
    badgesEarned: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://volunteerlink.onrender.com/api/volunteer/impact-dash/${volunteerId}`)
      .then((response) => {
        setData({
          tasksCompleted: response.data.tasksCompleted,
          hoursContributed: response.data.hoursContributed,
          badgesEarned: response.data.badges,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const cards = [
    {
      icon: "✔️",
      color: "#007bff",
      value: data.tasksCompleted,
      label: "Tasks Completed",
    },
    {
      icon: "⌛",
      color: "#ffa500",
      value: data.hoursContributed,
      label: "Hours Contributed",
    },
    {
      icon: "🛡️",
      color: "#00c1c1",
      value: data.badgesEarned,
      label: "Badges Earned",
    },
  ];

  return (
    <>
      <h1>Welcome user!</h1>
      <div className="dashboard">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon" style={{ color: card.color }}>
              {card.icon}
            </div>
            <div className="content">
              <h2>{card.value}</h2>
              <p>{card.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImpactDash;
