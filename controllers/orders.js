import { Order } from "../models/orders.js";

export const placeOrder = async (req, res) => {
  try {
    const { orderAmount, orderId, orderedItems, customer } = req.body;

    const orderDetails = { orderAmount, orderId, orderedItems, customer };
    // console.log(customerDetails.orderedItems.id);
    await Order.create(orderDetails);
    res.status(200).json(orderDetails);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
