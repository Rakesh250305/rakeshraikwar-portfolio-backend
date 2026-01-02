import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  getProjects,
  createProject,
} from "../controllers/projectController.js";

import uploadImage from '../middleware/uploadImage.js'
const router = express.Router();

router.options("/create", (req, res) => {
  res.sendStatus(200);
});

// PUBLIC
router.get("/", getProjects);

// ADMIN
router.post("/create", adminAuth, uploadImage.single("image"), createProject);

export default router;
