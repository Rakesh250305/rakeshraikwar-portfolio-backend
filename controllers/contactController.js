import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, message: "Message sent" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, result: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
