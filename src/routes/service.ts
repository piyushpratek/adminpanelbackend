import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getSingleProduct,
  getlatestProducts,
  newProduct,
  updateProduct,
} from "../controllers/service.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

//To Create New Product  - /api/v1/product/new
router.route("/new").post(adminOnly, singleUpload, newProduct)

//To get all Products with filters  - /api/v1/product/all
router.route("/all").get(getAllProducts)

//To get last 10 Products  - /api/v1/product/latest
router.route("/latest").get(getlatestProducts)

//To get all unique Categories  - /api/v1/product/categories
router.route("/categories").get(getAllCategories)

//To get all Products   - /api/v1/product/admin-products
router.route("/admin-products").get(adminOnly, getAdminProducts)

// To get, update, delete Product
router.route("/:id").get(getSingleProduct).put(adminOnly, singleUpload, updateProduct).delete(adminOnly, deleteProduct)

export default router;
