import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  registerController,
  udpatePasswordController,
  updateProfileController,
  updateProfilePicController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// REGISTER
router.post("/register", registerController);

// LOGIN
router.post("/login", loginController);

// PROFILE
router.get("/profile", isAuth, getUserProfileController);

// LOGOUT
router.get("/logout", isAuth, logoutController);

// UPDATE PROFILE
router.put("/profile-update", isAuth, updateProfileController);

// UPDATE PASSWORD
router.put("/update-password", isAuth, udpatePasswordController);

// UPDATE PROFILE PIC
router.put("/update-picture", isAuth, singleUpload, updateProfilePicController);

export default router;
