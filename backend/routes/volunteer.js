const express=require('express');
const {handleGetVolunteerById,handleGetVolunteerImpact,handlePutSkills}=require("../controllers/volunteer");

const router=express.Router();


router.get("/impact-dash/:id",handleGetVolunteerImpact);
router.get("/:id",handleGetVolunteerById);
router.put("/update-skills/:id",handlePutSkills);



module.exports=router;