import express from "express";
import { handleUpload } from "@vercel/blob/client";

const router = express.Router();

router.post("/upload", async (req, res) => {
  try {
    const response = await handleUpload({
      request: req,
      body: req.body,

      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
        maximumSizeInBytes: 5 * 1024 * 1024, // 5MB
      }),

      onUploadCompleted: async ({ blob }) => {
        console.log("✅ Upload complete:", blob.url);
      },
    });

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
