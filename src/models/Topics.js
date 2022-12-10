import { Schema, models, model } from "mongoose";

const topicsSchema = new Schema(
  {
    titleTopic: {
      type: String,
      required: [true, "El título es requerido"],
      trim: true,
      maxLength: [100, "El título debe tener menos de 100 caracteres"],
    },
    descriptionTopic: {
      type: String,
      required: true,
      trim: true,
      maxLength: [320, "La descripción debe tener menos de 320 caracteres"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      maxLength: [40, "Title must be less than 40 characters"],
    },
    content: {
      type: [{}],
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export default models.Topics || model("Topics", topicsSchema);
