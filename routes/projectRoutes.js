import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  getProjects,
  createProject,
} from "../controllers/projectController.js";

const router = express.Router();

// PUBLIC
router.get("/", getProjects);

// ADMIN
router.post("/create", adminAuth, createProject);

export default router;
