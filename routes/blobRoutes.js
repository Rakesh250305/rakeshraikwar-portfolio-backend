import express from "express";
import { handleUpload } from "@vercel/blob/client";

const router = express.Router();

router.post("/upload", async (req, res) => {
  try {
    const body = await req.body;

    const response = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
          maximumSizeInBytes: 1024 * 1024 * 5,
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("Upload completed:", blob.url);
      },
    });

    return res.json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

export default router;
