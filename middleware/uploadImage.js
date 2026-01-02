import multer from "multer";

const uploadImage = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.mimetype)) {
      cb(
        new Error("Only image files (.png, .jpeg, .jpg, .webp) are allowed"),
        false
      );
    } else {
      cb(null, true);
    }
  },
});

export default uploadImage;
