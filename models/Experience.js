import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },

    highlights: {
      type: [String],
      default: [],
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Experience", experienceSchema);
