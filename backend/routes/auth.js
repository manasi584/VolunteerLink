const express=require("express");
const {handleVolunteerSignin,handleVolunteerSignup,handleNGOSignup}=require("../controllers/auth")

const router=express.Router();


router.route("/register/volunteer")
.post(handleVolunteerSignup);

router.route("/register/ngo")
.post(handleNGOSignup);

router.route("/login/volunteer")
.post(handleVolunteerSignin);

router.get("/logout",(req,res)=>{
    res.clearCookie("token").redirect("/");
})

module.exports=router;
