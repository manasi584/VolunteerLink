import React, { useState } from "react";

const Recommendation = () => {
  const [recommended, setRecommended] = useState(false); // State to manage recommendations

  const initiateRecommendation = () => {
    // Simulate fetching recommended jobs
    setRecommended(true);
  };

  const jobs = [
    { 
      title: "Poster Designer", 
      NGO: "Art for Awareness Foundation", 
      due: "2025-01-27 " 
    },
    { 
      title: "Social Media Graphics Creator", 
      NGO: "Youth Empowerment Alliance", 
      due: "2025-01-28 " 
    },
    { 
      title: "Event Banner Designer", 
      NGO: "Hope for Humanity Trust", 
      due: "2025-01-29 " 
    },
    { 
      title: "Newsletter Layout Designer", 
      NGO: "Education for All Initiative", 
      due: "2025-01-30 " 
    },
    { 
      title: "Brochure Illustrator", 
      NGO: "Healthcare Heroes Network", 
      due: "2025-01-31 " 
    },
  ];

  if (!recommended) {
    return (
      <div className="available-jobs-card">
        <div className="card-header">
          <h2>Recommended Jobs</h2>
        </div>
        <div className="recommend-button">
          <button
            type="button"
            className="btn btn-info"
            onClick={initiateRecommendation} // Trigger state change
          >
            Initiate Recommendation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="available-jobs-card">
      <div className="card-header">
        <h2>Recommended Jobs</h2>
      </div>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div className="job-item" key={index}>
            <div className="job-content">
              <h3>{job.title}</h3>
              <p>
                NGO <strong>{job.NGO}</strong>
              </p>
              <p className="time">Deadline: {job.due}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
