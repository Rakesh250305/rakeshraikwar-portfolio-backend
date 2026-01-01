import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  submitContact,
  getContacts,
} from "../controllers/contactController.js";

const router = express.Router();

// PUBLIC
router.post("/submit", submitContact);

// ADMIN
router.get("/", adminAuth, getContacts);

export default router;
