import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/index.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.port || 3000;

const URI = `mongodb+srv://bilal:bilal@cluster0.ncawirq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => console.log("DB Connected"));
mongoose.connection.on("error", (err) => console.log("Error connecting to DB: " + err));

app.use(cors()); // Ensure CORS is configured before other routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req, res) => {
    res.json("Server is running");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
