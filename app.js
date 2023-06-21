import express from "express";
import productsRouter from "./routes/products.js";
import ordersRouter from "./routes/orders.js";
import feedbacksRouter from "./routes/feedbacks.js";
import { config } from "dotenv";
import cors from "cors";

export const app = express();

config({ path: "./data/config.env" });

//using middleware to extract input from the post request in req.body
app.use(express.json());
//using middleware to enable cross origin resource sharing
app.use(cors())

app.get("/", (req, res) => {
  res.send("API is functionally running");
});

app.use("/order", ordersRouter);

app.use("/products", productsRouter);

app.use("/feedbacks", feedbacksRouter);