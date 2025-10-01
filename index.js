const express = require("express");
const mongoose=require("mongoose");
const studentRoute=require("../node/Routes/studentRoutes");
const app = express();
const PORT = 80;
app.use(express.json());
mongoose.connect(
    "mongodb+srv://Shivam:123@cluster0.3fus09e.mongodb.net/song?retryWrites=true&w=majority&appName=Cluster0",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
);
app.use("/song",studentRoute);
app.listen(PORT,()=>{
    console.log("server is running http://localhost:"+PORT);
});