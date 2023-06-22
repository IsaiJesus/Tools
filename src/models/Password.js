import { Schema, models, model } from "mongoose";

const passwordSchema = new Schema({
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
    trim: true,
  },
});

export default models.Password || model("Password", passwordSchema);
