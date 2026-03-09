import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name:
    {
      type: String,

    },
    email:
    {
      type: String,
      unique: true
    },

    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [6, "password length should be greater than 6 characters"],
    },

    role:
    {
      type: String,
      default: "user"
    },
    profilePic: {
      public_id: String,
      url: String,
    },
  },
  { timestamps: true }
);

// Hash password before save
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate JWT
userSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};


export default mongoose.model("User", userSchema);
