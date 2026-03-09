import express from "express";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  deleteCategoryController,
  getAllCategoriesController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// CREATE CATEGORY
router.post("/create", isAuth, isAdmin, createCategory);

// GET ALL
router.get("/get-all", getAllCategoriesController);

// UPDATE
router.put("/update/:id", isAuth, isAdmin, updateCategoryController);

// DELETE
router.delete("/delete/:id", isAuth, isAdmin, deleteCategoryController);

export default router;
