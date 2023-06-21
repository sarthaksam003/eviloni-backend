import express from "express";
import {
  fetchAllProducts,
  addProduct,
  getProductDetails,
} from "../controllers/products.js";
const router = express.Router();

router
  .get("/", fetchAllProducts)
  .post("/", addProduct)
  .get("/:id", getProductDetails);

export default router;
