import express from "express";
import { fetchAllProducts, addProduct } from "../controllers/products.js";
const router = express.Router();

router.get("/", fetchAllProducts).post("/", addProduct);

export default router;
