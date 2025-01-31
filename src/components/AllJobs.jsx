import React, { useEffect, useState } from "react";
import axios from "axios";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://volunteerlink.onrender.com/api/tasks");
        setJobs(response.data.tasks); 
      } catch (err) {
        setError("Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="available-jobs-card">
      <div className="card-header">
        <h2>All Available Jobs</h2>
      </div>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="error">{error}</p>}

      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div className="job-item" key={index}>
              <div className="job-content">
                <h3>{job.title}</h3>
                <p>
                  NGO: <strong>{job.ngoName}</strong>
                </p>
                <p className="time">Deadline: {new Date(job.deadline).toDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          !loading && <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
