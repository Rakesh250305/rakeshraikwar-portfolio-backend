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
    console.log(req.body);
    const {
      title,
      description,
      tech,
      githubUrl,
      liveUrl,
    } = req.body;

    let imageUrl = null;
    if (req.file){
      const blob = await put(
        `blob/${Date.now()}-${req.title}`,
        req.file.buffer,
        {access : "public" }
      );
      imageUrl = blob.url;
    }
    const techArray = typeof tech === "string" ? JSON.parse(tech || "[]") : tech || [];

    const project = await Project.create({
      title,
      description,
      tech: techArray,
      githubUrl,
      liveUrl,
      image: imageUrl,
    });
    res.status(200).json({
      success: true,
      message: "Project Created Success!",
      result: project
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.log(err);
  }
};
