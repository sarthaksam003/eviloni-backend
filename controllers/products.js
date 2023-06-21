import { Product } from "../models/product.js";

export const fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, price, description, productB, productF, productM } = req.body;
    await Product.create({
      name,
      price,
      description,
      productB,
      productF,
      productM,
    });

    res.status(200).json({
      success: true,
      message: "Product added successfully",
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.find({ _id: id });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Product not found" });
  }
};
