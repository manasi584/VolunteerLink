const NGO = require("../models/ngo");
const Task = require("../models/task");

// async function handleGetAllTasks(req,res){
//     const allTasks= await Task.find({});

//     return res;
// }


async function handlePostTask(req,res){
    try {
        const ngoId  = req.params.ngoId;
        const { title, description, requiredSkills, isRemote, location, deadline } = req.body;
  
        if (!title || !description || !requiredSkills || !deadline) {
          return res.status(400).json({ message: "Title, description, skills, and deadline are required." });
        }
         
        const ngo = await NGO.findById(ngoId);
        if (!ngo) {
          return res.status(404).json({ message: "NGO not found." });
        }
    
     
        const newTask = await Task.create({
          title,
          description,
          requiredSkills,
          ngo: ngoId,
          applicants: [],
          acceptedVolunteers: [],
          isRemote,
          location,
          deadline,
          status: "Open", 
        });
    
        ngo.tasks.push({ task: newTask._id, status: "Upcoming" });
        await ngo.save(); 
    
        res.status(201).json({ message: "Task created successfully!", task: newTask });
      } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
      }

}

module.exports={
    handlePostTask,

}





