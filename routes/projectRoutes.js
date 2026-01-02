import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  getProjects,
  createProject,
} from "../controllers/projectController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// PUBLIC
router.get("/", getProjects);

// ADMIN
router.post("/create", adminAuth, upload.single("image"), createProject);

export default router;
