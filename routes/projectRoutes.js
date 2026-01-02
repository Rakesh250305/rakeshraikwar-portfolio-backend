import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  getProjects,
  createProject,
} from "../controllers/projectController.js";

const router = express.Router();
import uploadImage from '../middleware/uploadImage.js'

// PUBLIC
router.get("/", getProjects);

// ADMIN
router.post("/create", adminAuth, uploadImage.single("image"), createProject);

export default router;
