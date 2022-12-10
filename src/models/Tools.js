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
