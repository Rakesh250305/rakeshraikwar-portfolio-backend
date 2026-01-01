import Project from "../models/Project.js";
// import { put } from "@vercel/blob";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, result: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      tech,
      githubUrl,
      liveUrl,
    //   imageBase64,
    } = req.body;

    // let imageUrl = "";

    // if (imageBase64) {
    //   const blob = await put(
    //     `projects/${Date.now()}.png`,
    //     Buffer.from(imageBase64, "base64"),
    //     { access: "public" }
    //   );
    //   imageUrl = blob.url;
    // }

    const project = await Project.create({
      title,
      description,
      tech,
      githubUrl,
      liveUrl,
    //   image: imageUrl,
    });

    res.status(201).json({ success: true, result: project });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.log(err)
  }
};
