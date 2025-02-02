const express=require("express");
const path=require("path");
const cookieParser=require("cookie-parser");
require('dotenv').config();
const cors = require('cors');




const {connectMongoDB}=require("./connection");
const {validateToken}=require("./services/authentication");
const {authenticateJWT}=require("./middlewares/auth")

const authRoute=require("./routes/auth");
const volunteerRoute=require("./routes/volunteer");
const taskRoute=require("./routes/task");



const app=express();
const PORT=8000;

//Database
connectMongoDB(process.env.DATABASE_URI);

//Templating engine
app.set('view engine','ejs');
app.set("views",path.resolve("./views"));

//Middleware 
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
app.use(express.static(path.resolve("./public")));



//Routes
app.use("/api/auth",authRoute);
app.use("/api/volunteer",volunteerRoute);
app.use("/api/tasks",taskRoute);
app.get("/api/profile", (req, res) => {
    const token = req.cookies.token; // Get token from cookie
  
    if (!token) return res.status(401).json({ error: "Unauthorized" });
  
    try {
      const decoded = validateToken(token);
      res.json({ user: decoded });
    } catch (err) {
      res.status(401).json({ error: "Invalid token" });
    }
  });

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));