import express from "express";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import {
<<<<<<< HEAD
changeOrderStatusController,
  createOrderController,
  getAllOrdersController,
  getMyOrdersCotroller,
  paymentsController,
  singleOrderDetrailsController,

=======
  createOrderController,
  getUserOrdersController,
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
} from "../controllers/orderController.js";

const router = express.Router();

<<<<<<< HEAD
// CREATE ORDERS
router.post("/create", isAuth, createOrderController);

//  GET ALL ORDERS
router.get("/my-orders", isAuth, getMyOrdersCotroller);

//  GET SINGLE ORDER DETAILS
router.get("/my-orders/:id", isAuth, singleOrderDetrailsController);

// acceipt payments
router.post("/payments", isAuth, paymentsController);

/// ======== ADMIN PART ============
// get all order
router.get("/admin/get-all-orders", isAuth, isAdmin, getAllOrdersController);

// change order status
router.put("/admin/order/:id", isAuth, isAdmin, changeOrderStatusController);
=======
// CREATE ORDER
router.post("/create", isAuth, createOrderController);

// MY ORDERS
router.get("/my-orders", isAuth, getUserOrdersController);
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab


export default router;
