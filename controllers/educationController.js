import Education from "../models/Education.js";

export const getEducation = async (req, res) => {
  try {
    const data = await Education.find().sort({ createdAt: -1 });
    res.json({ success: true, result: data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json({ success: true, result: education });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
