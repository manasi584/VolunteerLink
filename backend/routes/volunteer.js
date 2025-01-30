const express=require('express');
const {handleGetVolunteerById}=require("../controllers/volunteer");

const router=express.Router();


router.get("/:id",handleGetVolunteerById);



module.exports=router;