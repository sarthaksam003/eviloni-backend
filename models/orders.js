import mongoose from "mongoose";

const schema = new mongoose.Schema({
  orderAmount: { type: Number, required: true },
  orderId: { type: String, required: true },
  orderedItems: { type: [Object], required: true },
  customer: { type: Object, required: true },
});

export const Order = mongoose.model("Order", schema);
