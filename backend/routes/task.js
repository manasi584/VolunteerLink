const express=require('express');
const {handlePostTask,handleGetAllTasks,handleCurrentJobs}=require("../controllers/task");

const router=express.Router();


router.get("/",handleGetAllTasks);
router.post("/:ngoId",handlePostTask);
router.get("/accepted/:volunteerId",handleCurrentJobs);



module.exports=router;