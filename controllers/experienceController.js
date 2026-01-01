import Experience from "../models/Experience.js";
// import { put } from "@vercel/blob";

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
    //   imageBase64,
    } = req.body;

    // let imageUrl = "";

    // if (imageBase64) {
    //   const blob = await put(
    //     `experience/${Date.now()}.png`,
    //     Buffer.from(imageBase64, "base64"),
    //     { access: "public" }
    //   );
    //   imageUrl = blob.url;
    // }

    const experience = await Experience.create({
      role,
      company,
      duration,
      description,
      highlights,
    //   image: imageUrl,
    });

    res.status(201).json({ success: true, result: experience });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
