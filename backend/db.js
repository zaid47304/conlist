require("dotenv").config();
const mongoose =require("mongoose");


const mongoURI = `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.zb79y.mongodb.net/?retryWrites=true&w=majority`;
const connectToMongo=()=>{
     mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
         console.log("connected to mongoose")
     })
}

module.exports=connectToMongo;