import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  getProjects,
  createProject,
} from "../controllers/projectController.js";

const router = express.Router();
import { upload } from '../middleware/upload.js'

// PUBLIC
router.get("/", getProjects);

// ADMIN
router.post("/create", adminAuth, upload.single("image"), createProject);

export default router;
