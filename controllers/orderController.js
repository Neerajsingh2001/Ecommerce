<<<<<<< HEAD
import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";
import { stripe } from "../server.js";


// // CREATE ORDER
// export const createOrderController = async (req, res) => {
//   try {
//     const { products, amount } = req.body;

//     const order = new orderModel({
//       products,
//       amount,
//       buyer: req.user._id,
//     });

//     await order.save();

//     res.status(201).send({
//       success: true,
//       message: "Order Placed Successfully",
//       order,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error while creating order",
//       error,
//     });
//   }
// };

// // GET USER ORDERS
// export const getUserOrdersController = async (req, res) => {
//   try {
//     const orders = await orderModel
//       .find({ buyer: req.user._id })
//       .populate("products");

//     res.status(200).send({
//       success: true,
//       orders,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error fetching orders",
//     });
//   }
// };




// CREATE ORDERS------------------------------

export const createOrderController = async (req, res) => {
  try {
    const {
      shippingInfo, orderItems, paymentMethod, paymentInfo,
      itemPrice, tax, shippingCharges, totalAmount,
    } = req.body;

    //valdiation  // create order
    const order = await orderModel.create({
      user: req.user._id,
      shippingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
    });

    // stock update
    for (let i = 0; i < orderItems.length; i++) {
      // find product
      const product = await productModel.findById(orderItems[i].product);
      product.stock -= orderItems[i].quantity;
      await product.save();
    }
=======

import orderModel from "../models/orderModel.js";


// CREATE ORDER
export const createOrderController = async (req, res) => {
  try {
    const { products, amount } = req.body;

    const order = new orderModel({
      products,
      amount,
      buyer: req.user._id,
    });

    await order.save();

>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
    res.status(201).send({
      success: true,
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
<<<<<<< HEAD
      message: "Error In Create Order API",
=======
      message: "Error while creating order",
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
      error,
    });
  }
};

<<<<<<< HEAD
// GET ALL ORDERS - MY ORDERS
export const getMyOrdersCotroller = async (req, res) => {
  try {
    // find orders
    const orders = await orderModel.find({ user: req.user._id });
    //valdiation
    if (!orders) {
      return res.status(404).send({
        success: false,
        message: "no orders found",
      });
    }
    res.status(200).send({
      success: true,
      message: "your orders data",
      totalOrder: orders.length,
=======
// GET USER ORDERS
export const getUserOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products");

    res.status(200).send({
      success: true,
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
<<<<<<< HEAD
      message: "Error In My orders Order API",
      error,
    });
  }
};

// GET SINGLE ORDER INFO
export const singleOrderDetrailsController = async (req, res) => {
  try {
    // find orders
    const order = await orderModel.findById(req.params.id);
    //valdiation
    if (!order) {
      return res.status(404).send({
        success: false,
        message: "no order found",
      });
    }
    res.status(200).send({
      success: true,
      message: "your order fetched",
      order,
    });
  } catch (error) {
    console.log(error);
    // cast error ||  OBJECT ID
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In Get UPDATE Products API",
      error,
    });
  }
};

// ACCEPT PAYMENTS
export const paymentsController = async (req, res) => {
  try {
    // get amount
    const { orderId, totalAmount } = req.body;
    if (!orderId || !totalAmount) {
      return res.status(400).send({
        success: false,
        message: "OrderId and amount required"
      });
    }

    // // find order
    // const order = await orderModel.findById(orderId);

    // if (!order) {
    //   return res.status(404).send({
    //     success: false,
    //     message: "Order not found",
    //   });
    // }

    const { client_secret } = await stripe.paymentIntents.create({
      amount: Number(totalAmount * 100),
      currency: "usd",
    });
    res.status(200).send({
      success: true,
      client_secret,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Payment error",
      error: error.message,
    });
  }
};

// ========== ADMIN SECTION =============

// GET ALL ORDERS
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).send({
      success: true,
      message: "All Orders Data",
      totalOrders: orders.length,
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get UPDATE Products API",
      error,
    });
  }
};

// CHANGE ORDER STATUS
export const changeOrderStatusController = async (req, res) => {
  try {
    // find order
    const order = await orderModel.findById(req.params.id);
    // validatiom
    if (!order) {
      return res.status(404).send({
        success: false,
        message: "order not found",
      });
    }
    if (order.orderStatus === "processing") order.orderStatus = "shipped";
    else if (order.orderStatus === "shipped") {
      order.orderStatus = "deliverd";
      order.deliverdAt = Date.now();
    } else {
      return res.status(500).send({
        success: false,
        message: "order already deliverd",
      });
    }
    await order.save();
    res.status(200).send({
      success: true,
      message: "order status updated",
    });
  } catch (error) {
    console.log(error);
    // cast error ||  OBJECT ID
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In Get UPDATE Products API",
      error,
    });
  }
};
=======
      message: "Error fetching orders",
    });
  }
};
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
