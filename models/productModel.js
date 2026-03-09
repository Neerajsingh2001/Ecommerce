import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
<<<<<<< HEAD
    images: [
      {
      public_id: String,
      url: String,
    },
  ],
=======
    images: {
      public_id: String,
      url: String,
    },
>>>>>>> dea4ff89c2240ef01d9cd26df5a42a1bdeffb7ab
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    stock: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
