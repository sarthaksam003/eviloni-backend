import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  remark: { type: String, required: true },
  subscription: { type: Boolean, default: false, required: true },
});

export const Feedback = mongoose.model("Feedback", schema);
