import { Feedback } from "../models/feedbacks.js";

export const sendFeedback = async (req, res) => {
  try {
    const { name, email, remark, subscription } = req.body;

    const feedbackBody = { name, email, remark, subscription };

    await Feedback.create(feedbackBody);
    res.status(200).json(feedbackBody);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
