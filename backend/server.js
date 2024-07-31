import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dateRoutes from "./routes/dateRoutes.js";
const corsOptions= {
    origin: "http://localhost:5173"
}

// SETUP
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors(corsOptions));

// DB
mongoose
.connect(MONGO_URL)
.then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
})
.catch((error) => {console.log(`Error: ${error}`)});

app.use('/date', dateRoutes);
