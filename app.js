import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router/index.js"; // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to enable CORS
app.use(cors());

const uri = "mongodb+srv://bilal:bilal@cluster0.ncawirq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected!"))
    .catch((error) => console.log("err mongodb", error.message));

// Router middleware
app.use(router); // Ensure the routes are correctly prefixed

app.get("/", (req, res) => {
    res.json("Running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
