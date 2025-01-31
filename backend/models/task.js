const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: { type: String, required: true }, 
  requiredSkills: [{ type: String, required: true }], // List of required skills
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: "NGO", required: true }, // Linked to NGO
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Volunteer" }], // Volunteers who applied
  acceptedVolunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Volunteer" }], // Selected volunteers
  isRemote: { type: Boolean, default: true }, // Remote or on-site
  location: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  hoursSpent: { type: Number, default: 0 },
  deadline: { type: Date, required: true }, // Task completion deadline
  status: {
    type: String,
    enum: ["Open", "In Progress", "Completed", "Closed","Upcoming"],
    default: "Open",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", TaskSchema);
