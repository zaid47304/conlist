const express=require("express");
const connectToMongo=require("./db");
connectToMongo();
const app=express();

var cors=require("cors");
app.use(cors());
app.use(express.json()); // middleware used

// Available routes
app.use('/api/auth',require("./routes/auth"));
app.use('/api/contest',require("./routes/contest"));

const PORT=4000;
app.listen(PORT,()=>{
    console.log(`app is listening on http://localhost:${PORT}`);
})