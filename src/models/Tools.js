import { Schema, models, model } from "mongoose";

const toolsSchema = new Schema(
  {
    titleTool: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      trim: true,
      maxLength: [40, "Title must be less than 40 characters"],
    },
    slug: {
      type: String,
      required: [true, "La extensión es requerida"],
      trim: true,
      maxLength: [100, "La extensión debe tener menos de 100 caracteres"],
    },
    descriptionTool: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: [320, "Description must be less than 320 characters"],
    },
    imageTool: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    versionKey: false,
  }
);

export default models.Tools || model("Tools", toolsSchema);
