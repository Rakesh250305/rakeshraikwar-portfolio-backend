import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  getEducation,
  createEducation,
} from "../controllers/educationController.js";

const router = express.Router();

// PUBLIC
router.get("/", getEducation);

// ADMIN
router.post("/create", adminAuth, createEducation);

export default router;
