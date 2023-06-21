import mongoose from "mongoose";
// import { products } from "./index.js";
// import {Product} from "../models/product.js"
export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "eviloni" })
    .then((c) => {
      // Product.insertMany(products);
      console.log("Database connected");
    })
    .catch((e) => console.log(e));
};
