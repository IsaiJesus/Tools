import { Schema, models, model } from "mongoose";

const categoriesSchema = new Schema(
  {
    category: {
      type: String,
      required: [true, "Category is required"],
      unique: true,
      trim: true,
      maxLength: [30, "Tag must be less than 30 characters"],
    },
    img: {
      type: String,
      required: [true, "Image is required"],
      unique: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

export default models.Categories || model("Categories", categoriesSchema);