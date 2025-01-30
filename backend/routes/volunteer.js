const express=require('express');
const {handleGetVolunteerById,handleGetVolunteerImpact}=require("../controllers/volunteer");

const router=express.Router();


router.get("/impact-dash/:id",handleGetVolunteerImpact);
router.get("/:id",handleGetVolunteerById);



module.exports=router;