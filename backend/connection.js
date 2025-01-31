const mongoose = require('mongoose');

// function connectMongoDB(url){
//    return mongoose
// .connect(url)
// .then(()=> console.log("MongoDB connected"))
// .catch((err)=>console.log("Mongo error",err));
// }


function connectMongoDB(uri){
    mongoose.connect(uri)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.log("Error connecting to MongoDB Atlas:", err));}






module.exports={
    connectMongoDB,
}