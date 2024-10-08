import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router/index.js"; 
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());
const uri = "mongodb+srv://bilal:bilal@cluster0.ng610yy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(uri);
mongoose.connection.on("connected",()=>console.log("mongoDb connected"));
mongoose.connection.on("error",()=>console.log("error connecting to db"))
app.use(router); 

app.get("/", (req, res) => {
    res.json("Running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
