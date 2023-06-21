import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: [String], required: true },
  category: { type: String, required: true },
  productB: { type: String, required: true },
  productF: { type: String, required: true },
  productM: { type: String, required: true },
});

export const Product = mongoose.model("Product", schema);
