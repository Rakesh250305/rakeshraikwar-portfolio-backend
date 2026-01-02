import express from "express";
import { handleUpload } from "@vercel/blob";

const router = express.Router();

router.post("/upload", async (req, res) => {
  try {
    const response = await handleUpload({
      req,
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
          maximumSizeInBytes: 5 * 1024 * 1024, // 5MB
        };
      },
    });

    return res.json(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Blob upload failed" });
  }
});

export default router;
