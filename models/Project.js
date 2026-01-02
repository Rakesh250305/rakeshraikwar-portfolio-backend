import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: null,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    tech: {
      type: [String],
      required: true,
      default: [],
    },

    githubUrl: {
      type: String,
      trim: true,
    },

    liveUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);
