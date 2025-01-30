const mongoose = require("mongoose");

const NGOSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  website: { type: String },
  verified: { type: Boolean, default: false }, // NGO verification status
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Volunteer" }], 
  tasks: [
    {
      task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" }, 
      status: { type: String, enum: ["Upcoming", "Ongoing", "Completed"], default: "Upcoming" }
    }
  ],
  fundsRaised: { type: Number, default: 0 }, 
  
  createdAt: { type: Date, default: Date.now },
});
const NGO= mongoose.model("NGO", NGOSchema)
module.exports =NGO;
