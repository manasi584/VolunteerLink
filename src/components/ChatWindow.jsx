import React, { useState } from "react";
import "./ChatWindow.css"; // Your CSS file for styling

const ChatWindow = ({ taskId }) => {
  const [messages, setMessages] = useState([
    { sender: "NGO", message: "Hello! Thank you for volunteering for this task." },
    { sender: "You", message: "I'm excited to help! Can you share more details about the task?" },
    { sender: "NGO", message: "The task involves data entry. We need someone to update our records." },
    { sender: "You", message: "Got it! What is the deadline for this task?" },
    { sender: "NGO", message: "The deadline is next Friday. Please ensure it's done before then." },
    { sender: "You", message: "Sure, I’ll get started right away!" },
    { sender: "NGO", message: "Thanks! Let me know if you need any help." },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { message: newMessage, sender: "You" }]);
      setNewMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>Chat for Task </span>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
