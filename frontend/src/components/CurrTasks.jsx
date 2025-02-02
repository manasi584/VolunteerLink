import React, { useEffect, useState } from "react";
import axios from "axios";



const URL = import.meta.env.VITE_URL;

const CurrTasks = () => {
  const volunteerId = "679c891df9bf773da95df622";
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `${URL}/api/tasks/accepted/${volunteerId}`
        );
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h2>Current Jobs</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline <span className="info-icon">i</span></th>
      
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{new Date(task.deadline).toLocaleDateString()}</td>
      
                <td>{task.isRemote ? "Remote" : "On-Site"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No tasks assigned.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CurrTasks;
