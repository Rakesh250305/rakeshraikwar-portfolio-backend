import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from './routes/adminRoutes.js'
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from './routes/projectRoutes.js'
import experienceRoutes from './routes/experienceRoutes.js'
import educationRoutes from './routes/educationRoutes.js'
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/admin/projects", projectRoutes);
app.use("/admin/experience", experienceRoutes);
app.use("/admin/education", educationRoutes);
app.use("/contact", contactRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));
app.exports();