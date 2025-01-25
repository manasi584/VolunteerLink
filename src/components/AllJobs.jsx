import React from 'react'

const AllJobs = () => {
      const jobs = [
        { title: "Frontend Developer", NGO: "Code for Change Initiative", due: "2025-01-25 " },
        { title: "Backend Developer", NGO: "Tech for Good Foundation", due: "2025-01-25 " },
        { title: "UI Designer", NGO: "Creative Impact Network", due: "2025-01-26 " },
        { title: "Project Manager", NGO: "Future Leaders Association", due: "2025-01-26" },
      ];
      
   
      return (
        <div className="available-jobs-card">
          <div className="card-header">
            <h2>All Available Jobs</h2>
          </div>
          <div className="job-list">
            {jobs.map((job, index) => (
              <div className="job-item" key={index}>
                <div className="job-content">
                  <h3>{job.title}</h3>
                  <p>NGO: <strong>{job.NGO}</strong></p>
                  <p className="time">Deadline: {job.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default AllJobs