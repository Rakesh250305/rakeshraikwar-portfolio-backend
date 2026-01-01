import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import { createExperience, getExperiences } from "../controllers/experienceController.js";
const router = express.Router();

// PUBLIC
router.get("/", getExperiences);

// ADMIN
router.post("/create", adminAuth, createExperience);

export default router;
