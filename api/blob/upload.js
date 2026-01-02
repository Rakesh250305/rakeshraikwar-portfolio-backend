import { handleUpload } from "@vercel/blob/server";

export default async function handler(req, res) {
  const body = await req.json();

  try {
    const response = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async () => {
        // Optional: add auth check here
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
          maximumSizeInBytes: 5 * 1024 * 1024, // 5MB
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("Upload completed:", blob.url);
      },
    });

    return res.json(response);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}
