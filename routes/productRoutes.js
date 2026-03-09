import express from "express";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// GET ALL
router.get("/get-all", getAllProductsController);

// GET SINGLE
router.get("/:id", getSingleProductController);

// CREATE
router.post("/create", isAuth, isAdmin, singleUpload, createProductController);

// UPDATE
router.put("/:id", isAuth, isAdmin, updateProductController);

// UPDATE IMAGE
router.put("/image/:id", isAuth, isAdmin, singleUpload, updateProductImageController);

// DELETE IMAGE
router.delete("/delete-image/:id", isAuth, isAdmin, deleteProductImageController);

// DELETE PRODUCT
router.delete("/delete/:id", isAuth, isAdmin, deleteProductController);

export default router;
