import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/index.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT =process.env.port|| 3000;




const URI = `mongodb+srv://bilal:bilal@cluster0.ncawirq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(URI)
mongoose.connection.on("connected",()=>console.log("DB Connected"));
mongoose.connection.on("error",(err)=>console.log("error connecting to db")+err)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(router)

app.get("/",(req,res)=>{
    res.json("server is running")
})

app.listen(PORT,()=>{
    console.log("server is running at http://localhost:3000")
})
