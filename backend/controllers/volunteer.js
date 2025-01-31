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
async function handlePutSkills(req, res) {
    try {
        const id = req.params.id;
        const { skills } = req.body; 
        const volunteer = await Volunteer.findById(id);
        if (!volunteer) {
            return res.status(404).json({ message: "Volunteer not found" });
        }

        if (!Array.isArray(skills)) {
            return res.status(400).json({ message: "Skills should be an array" });
        }

        volunteer.skills = [...new Set([...volunteer.skills, ...skills])];

        // Save the updated document
        await volunteer.save();

        res.status(200).json({ message: "Skills updated successfully", volunteer });
    } catch (error) {
        console.error("Error updating skills:", error);
        res.status(500).json({ message: "Internal server error" });
    }
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
handlePutSkills,
}