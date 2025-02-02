import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatWindow from "./ChatWindow"; // Assuming ChatWindow is in the same directory

const URL = "http://localhost:8000/"

const CurrTasks = () => {
  const volunteerId = "679c891df9bf773da95df622";
  const [tasks, setTasks] = useState([]);
  const [openChatTaskId, setOpenChatTaskId] = useState(null);

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

  const toggleChatWindow = (taskId) => {
    if (openChatTaskId === taskId) {
      setOpenChatTaskId(null); // Close the chat window if it's already open
    } else {
      setOpenChatTaskId(taskId); // Open the chat window for the clicked task
    }
  };

  const chatButtonStyle = {
    fontSize: '18px',        // Decrease font size
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#007bff',
    margin: '5px',           // Decrease margin around the button
    padding: '5px 10px',     // Decrease padding
    borderRadius: '50%',     // Make the button round
    transition: 'all 0.3s ease' // Smooth transition for hover effect
  };

  const chatButtonHoverStyle = {
    backgroundColor: '#f1f1f1',
    color: '#0056b3'
  };

  return (
    <div className="container">
      <h2>Current Jobs</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline <span className="info-icon">i</span></th>
            <th>Mode</th>
            <th>Chat</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{new Date(task.deadline).toLocaleDateString()}</td>
                <td>{task.isRemote ? "Remote" : "On-Site"}</td>
                <td>
                  <button
                    style={chatButtonStyle}
                    onClick={() => toggleChatWindow(task._id)}
                    onMouseEnter={(e) => e.target.style.backgroundColor = chatButtonHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    📱
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No tasks assigned.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Chat Window Modal */}
      {openChatTaskId && (
        <div className="modal-overlay" onClick={() => setOpenChatTaskId(null)}>
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            <ChatWindow taskId={openChatTaskId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrTasks;
