const express=require('express');
const {handlePostTask}=require("../controllers/task");

const router=express.Router();


// router.get("/",handleGetAllTasks);
router.post("/:ngoId",handlePostTask);



module.exports=router;