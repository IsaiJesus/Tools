import { Schema, models, model } from "mongoose";

const articlesSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      trim: true,
      maxLength: [60, "Title must be less than 60 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: [320, "Description must be less than 320 characters"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      trim: true,
      maxLength: [100, "Slug must be less than 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      maxLength: [30, "Category must be less than 30 characters"],
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Articles || model("Articles", articlesSchema);
