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

const FRONTEND_URL = "https://rakesh-raikwar.vercel.app";

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: [FRONTEND_URL, "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// option 1
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Backend Running</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            background: #0f172a;
            color: white;
            font-family: system-ui, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: #020617;
            padding: 2rem 3rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          }
          h1 {
            color: #38bdf8;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background: #2563eb;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
          }
          a:hover {
            background: #1d4ed8;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Backend Server Running</h1>
          <p>Rakesh Portfolio API is live</p>
          <a href="https://rakesh-raikwar.vercel.app/">
            Go to Frontend
          </a>
        </div>
      </body>
    </html>
  `);
});


// option 2
// app.get("/", (req, res) => {
//   res.send("Server is running...");
// });

//option 3
// app.get("/", (req, res) => {
//   res.redirect(process.env.FRONTEND_URL);
// });

app.use("/api/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/admin/projects", projectRoutes);
app.use("/admin/experience", experienceRoutes);
app.use("/admin/education", educationRoutes);
app.use("/contact", contactRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));
export default app;