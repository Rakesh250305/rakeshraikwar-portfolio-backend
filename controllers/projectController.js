import { put } from "@vercel/blob";
import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, result: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// create project
export const createProject = async (req, res) => {
  try {
    const { title, description, tech, githubUrl, liveUrl } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image required" });
    }

    const blob = await put(
      `projects/${Date.now()}-${req.title}`,
      req.file.buffer,
      { access: "public" }
    );

    const techArray =
      typeof tech === "string" ? JSON.parse(tech) : tech || [];

    const project = await Project.create({
      title,
      description,
      tech: techArray,
      githubUrl,
      liveUrl,
      image: blob.url,
    });

    res.status(201).json({
      success: true,
      message: "Project Created Successfully",
      result: project,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
