const Volunteer = require("../models/volunteer");
const NGO = require("../models/ngo");
const { createTokenForUser } = require("../middlewares/auth");

async function handleVolunteerSignin(req,res){
    const { email, password} = req.body;
  
    try {
        const user = await Volunteer.findOne({ email });
        if (!user) throw new Error("User not found");
     
        const isMatched = password===user.password;

        if (isMatched) {
            const token = createTokenForUser(user);
           res.cookie("token", token, {
            httpOnly: true, // Prevents access from JavaScript (XSS protection)
            secure: false, // Set to `true` in production (requires HTTPS)
            sameSite: "None", // Needed for cross-origin cookies
          });
            return res.status(200).json({msg:"Login successful"});
        }
        else throw new Error("incorrect password");
    }
    
    catch (error) {
        return res.json({
            error:"Incorrect email or password"
        });

    }

}

async function handleVolunteerSignup(req,res){
    const { name, password, email} = req.body;

    await Volunteer.create({
        name, email, password
    });
    return res.json({msg:"Done"});
}



async function handleNGOSignup(req, res) {
  try {
   
    const { name, email, password, website } = req.body;

   
    const existingNGO = await NGO.findOne({ email });
    if (existingNGO) {
      return res.status(400).json({ message: "NGO with this email already exists." });
    }



  const newNGO=await NGO.create({
      name,
      email,
      password, // Store hashed password
      website,
      verified: false, // Default verification status
      volunteers: [],
      tasks: [],
      fundsRaised: 0
    });

    return res.status(201).json({ message: "NGO registered successfully!", ngo: newNGO });
  } catch (error) {
    console.error("Error registering NGO:", error);
   return  res.status(500).json({ message: "Server error. Please try again later." });
  }

};

module.exports={
    handleVolunteerSignin,
    handleVolunteerSignup,
    handleNGOSignup,
}