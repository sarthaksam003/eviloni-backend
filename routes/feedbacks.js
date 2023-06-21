import express from "express";
import { sendFeedback } from "../controllers/feedbacks.js";

const router = express.Router();

router.post("/", sendFeedback);

export default router;
