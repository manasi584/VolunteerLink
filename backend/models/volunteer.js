const mongoose = require("mongoose");
const {createHmac,randomBytes}=require("crypto"); //built in package 


const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  skills: [{ type: String }], // List of skills
  // availability: {
  //   type: String, // Example: "Weekends", "Evenings", "Flexible"
  //   default: "Flexible",
  // },
  // location: {
  //   city: { type: String },
  //   state: { type: String },
  //   country: { type: String },
  // },
  completedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  badges: [{ type: String }], // Gamification badges
//   preferences: {
//     causes: [{ type: String }], // Example: ["Education", "Climate Action"]
//     remoteOnly: { type: Boolean, default: false },
//   },
recommendedTasks:[{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  createdAt: { type: Date, default: Date.now },
});


volunteerSchema.static("matchPassword",(password,user)=>{
  return user.password===password;
})




const Volunteer= mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
