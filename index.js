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

// Allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://rakesh-raikwar.vercel.app/" // production frontend
];


app.use(
  cors({
    origin: function (origin, callback) {
      // allow REST tools & server-to-server calls
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

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
export default app;