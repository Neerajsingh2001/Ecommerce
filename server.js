import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
<<<<<<< HEAD
import Stripe from "stripe";
import cloudinary from "cloudinary";
=======
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab

// ROUTES IMPORT
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import testRoutes from "./routes/testRoutes.js";

// CONFIG
dotenv.config();
connectDB();

<<<<<<< HEAD
// CLOUDINARY CONFIG
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

=======
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
// APP INIT
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

// ROUTES
<<<<<<< HEAD
app.use("/api/v1/test", testRoutes);    
=======
app.use("/api/v1/test", testRoutes);
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("API Running Successfully 🚀");
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
<<<<<<< HEAD

console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY);


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
=======
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
