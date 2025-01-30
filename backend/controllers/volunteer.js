const mongoose=require("mongoose");
const Volunteer=require("../models/volunteer");
const Task=require("../models/task");

async function handleGetVolunteerById(req,res){
    const id=req.params.id;
    const volun=await Volunteer.findById(id);
   
    return res.json({
        volunteer:volun
    });

}
async function handleGetVolunteerImpact(req,res){
    
    const volunteerId=req.params.id;
    const volun=await Volunteer.findById(volunteerId);
   
    const volunteerObjectId = new mongoose.Types.ObjectId(volunteerId);

// Corrected query using the new ObjectId instance
const tasks = await Task.aggregate([
  { $match: { acceptedVolunteers: volunteerObjectId, status: "Completed" } },
  { $group: { _id: "$acceptedVolunteers", totalHours: { $sum: "$hoursSpent" } } }
]);
  
    const totalHours = tasks.length > 0 ? tasks[0].totalHours : 0;

    return res.json({
        tasksCompleted:tasks.length,
        hoursContributed: totalHours,
        badgesEarned: volun.badges.length > 0 ? volun.badges.length : 0,
    });

}

module.exports={
handleGetVolunteerById,
handleGetVolunteerImpact,
}