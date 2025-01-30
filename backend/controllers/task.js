const NGO = require("../models/ngo");
const Task = require("../models/task");

async function handleGetAllTasks(req, res) {
  try {
    const allTasks = await Task.find({})
      .populate("ngo", "name") // Populate only the 'name' field from the NGO
      .select("title deadline ngo"); // Select specific fields to return

    if (!allTasks.length) {
      return res.status(404).json({ message: "No tasks found." });
    }

    const tasksData = allTasks.map(task => ({
      title: task.title,
      ngoName: task.ngo.name, // Access NGO name after population
      deadline: task.deadline,
    }));

    // Send the formatted response
    return res.status(200).json({ tasks: tasksData });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
}



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


async function handleCurrentJobs(req,res){
  try {
    const { volunteerId } = req.params;

    // Find all tasks where the given volunteer is in acceptedVolunteers
    const tasks = await Task.find({ acceptedVolunteers: volunteerId })
      .populate("ngo", "name") // Populate NGO name
      .select("title description deadline status ngo"); // Select required fields

    if (!tasks.length) {
      return res.status(404).json({ message: "No tasks found for this volunteer." });
    }

    res.status(200).json({ tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
}

module.exports={
    handlePostTask,
    handleGetAllTasks,
    handleCurrentJobs

}





