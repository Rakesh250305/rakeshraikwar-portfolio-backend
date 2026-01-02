import Experience from "../models/Experience.js";
import { put } from "@vercel/blob";

export const getExperiences = async (req, res) => {
  try {
    const data = await Experience.find().sort({ createdAt: -1 });
    res.json({ success: true, result: data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createExperience = async (req, res) => {
  try {
    const {
      role,
      company,
      duration,
      description,
      highlights,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image required" });
    }

    const blob = await put(
      `Experience/${Date.now()}-${req.company}`,
      req.file.buffer,
      { access: "public" }
    );

     const highlightsArray =
      typeof highlights === "string" ? JSON.parse(highlights) : highlights || [];


    const experience = await Experience.create({
      role,
      company,
      duration,
      description,
      highlights : highlightsArray,
      image: blob.url,
    });

    res.status(201).json({ success: true,message:"Experience Created", result: experience });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
