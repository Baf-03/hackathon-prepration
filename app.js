import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import router from "./router/index.js";
import cors from "cors"
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const uri = "mongodb+srv://bilal:bilal@cluster0.ncawirq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri)
    .then(() => console.log("mongodb connected!"))
    .catch((error) => console.log("err mongodb", error.message))

// app.use(route,cors());
app.use(cors());
app.use(router);

app.get("/",(req,res)=>{
    res.json("Running");
})

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
