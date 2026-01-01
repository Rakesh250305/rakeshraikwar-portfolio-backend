import express from "express";
import Project from "../models/Project.js";
import Experience from "../models/Experience.js";
import Education from "../models/Education.js";
import Contact from "../models/Contact.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/stats", adminAuth, async (req, res) => {
  const stats = {
    projects: await Project.countDocuments(),
    experience: await Experience.countDocuments(),
    education: await Education.countDocuments(),
    messages: await Contact.countDocuments(),
  };

  res.json(stats);
});

export default router;
