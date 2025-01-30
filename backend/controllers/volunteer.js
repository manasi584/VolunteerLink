const Volunteer=require("../models/volunteer");

async function handleGetVolunteerById(){
    const id=req.params.id;
    const volun=await Volunteer.findById(id).populate("completedTasks","recommendedTasks");
   
    return res.json({
        volunteer:volun
    });

}

module.exports={
handleGetVolunteerById
}